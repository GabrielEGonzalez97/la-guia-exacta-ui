import { TemplateRef } from '@angular/core';
import {
  TableHeaderItem,
  TableItem,
  TableModel,
} from 'carbon-components-angular';
import { SelfLink } from './elements/SelfLink';
import { StartLink } from './elements/StartLink';
import { Link } from './elements/link';
import { Node } from './elements/node';

export class MatrizTransicionEstadosTableModel extends TableModel {
  private tableData: TableItem[][] = [];
  private initData: TableItem[][] = [];

  private isAutomataFinitoNoDeterministico: boolean = false;

  constructor(
    private headerTemplate: TemplateRef<unknown>,
    private columnTemplate: TemplateRef<unknown>,
    private nodes: Node[],
    private links: (Link | SelfLink | StartLink)[]
  ) {
    super();

    this.setHeader(
      this.links
        .filter((link: Link | SelfLink | StartLink) => link.text !== '')
        .map((link) => link.text)
    );

    this.setData(this.nodes, this.links);

    this.pageLength = this.initData.length;
    this.totalDataLength = this.initData.length;

    this.selectPage(1);
  }

  public setHeader(newTableHeaders: string[]): void {
    const uniqueTexts: Set<string> = new Set<string>();
    const newTableHeadersWithoutRepetitions: string[] = newTableHeaders.filter(
      (header: string) => {
        if (!uniqueTexts.has(header)) {
          uniqueTexts.add(header);
          return true;
        }
        return false;
      }
    );
    this.header = [
      new TableHeaderItem({
        data: { title: 'δ' },
        template: this.headerTemplate,
      }),
      ...newTableHeadersWithoutRepetitions.map(
        (headerName: string) =>
          new TableHeaderItem({
            data: { title: headerName },
            template: this.headerTemplate,
          })
      ),
    ];
  }

  public setData(nodes: Node[], links: (Link | SelfLink | StartLink)[]): void {
    this.isAutomataFinitoNoDeterministico = false;
    this.initData = [];
    nodes.forEach((node: Node) => {
      let tempArray: TableItem[] = new Array(this.header.length).fill(
        new TableItem({
          data: '',
          template: this.columnTemplate,
        })
      );
      tempArray[0] = new TableItem({
        data: node.text,
        template: this.columnTemplate,
      });
      links.forEach((link: Link | SelfLink | StartLink) => {
        const linkText: string = link.text;
        const tempArrayPosition: number = this.header.findIndex(
          (headerItem: TableHeaderItem) => headerItem.data.title === linkText
        );

        if (tempArrayPosition >= 0) {
          if (link instanceof Link) {
            if (node.text === link.nodeA.text) {
              if (tempArray[tempArrayPosition].data === '') {
                tempArray[tempArrayPosition] = new TableItem({
                  data: link.nodeB.text,
                  template: this.columnTemplate,
                });
              } else {
                tempArray[tempArrayPosition].data += `, ${link.nodeB.text}`;
                this.isAutomataFinitoNoDeterministico = true;
              }
            }
          } else if (link instanceof SelfLink) {
            if (node.text === link.node.text) {
              if (tempArray[tempArrayPosition].data === '') {
                tempArray[tempArrayPosition] = new TableItem({
                  data: node.text,
                  template: this.columnTemplate,
                });
              } else {
                tempArray[tempArrayPosition].data += `, ${node.text}`;
                this.isAutomataFinitoNoDeterministico = true;
              }
            }
          }
        }
      });
      this.initData.push(tempArray);
    });

    this.tableData = [...this.initData];
  }

  public selectPage(page: number): void {
    this.data = this.getPage(page);
    this.totalDataLength = this.tableData.length;
    this.currentPage = Number(page);
  }

  private getPage(page: number): TableItem[][] {
    return this.tableData
      .filter(
        (_val: TableItem[], index: number) =>
          index >= page * this.pageLength - this.pageLength &&
          index < Math.min(page * this.pageLength, this.initData.length)
      )
      .map((data: TableItem[], _index: number) => {
        return data;
      });
  }

  public getHeaderNames(): string[] {
    return this.header.map((header: TableHeaderItem) => header.data.title);
  }

  public getMatrizTransicionEstados(): string[][] {
    let matrizTransicionEstados: string[][] = [];

    this.tableData.map((rowData: TableItem[]) => {
      matrizTransicionEstados.push(
        rowData.map((rowValue: TableItem) => rowValue.data)
      );
    });

    return matrizTransicionEstados;
  }

  public getIfIsAutomataFinitoNoDeterministico(): boolean {
    return this.isAutomataFinitoNoDeterministico;
  }
}
