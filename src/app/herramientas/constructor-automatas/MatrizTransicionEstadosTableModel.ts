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

  public tableHeaders: string[] = [];

  constructor(
    private headerTemplate: TemplateRef<unknown>,
    private columnTemplate: TemplateRef<unknown>,
    private nodes: Node[],
    private links: (Link | SelfLink | StartLink)[]
  ) {
    super();

    this.setHeader(
      this.links.map((link: Link | SelfLink | StartLink) => {
        if (link.text === '') {
          return 'Cadena vacía';
        } else {
          return link.text;
        }
      })
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
        let linkText: string = link.text;
        if (linkText === '') {
          linkText = 'Cadena vacía';
        }
        if (link instanceof Link) {
          if (node.text === link.nodeA.text) {
            tempArray[
              this.header.findIndex(
                (headerItem: TableHeaderItem) =>
                  headerItem.data.title === linkText
              )
            ] = new TableItem({
              data: link.nodeB.text,
              template: this.columnTemplate,
            });
          }
        } else if (link instanceof SelfLink) {
          if (node.text === link.node.text) {
            tempArray[
              this.header.findIndex(
                (headerItem: TableHeaderItem) =>
                  headerItem.data.title === linkText
              )
            ] = new TableItem({
              data: node.text,
              template: this.columnTemplate,
            });
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
}
