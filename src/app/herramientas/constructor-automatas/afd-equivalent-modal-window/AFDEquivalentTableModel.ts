import { TemplateRef } from '@angular/core';
import {
  TableHeaderItem,
  TableItem,
  TableModel,
} from 'carbon-components-angular';

export class AFDEquivalentTableModel extends TableModel {
  private tableData: TableItem[][] = [];

  constructor(
    private headerTemplate: TemplateRef<unknown>,
    private columnTemplate: TemplateRef<unknown>,
    private matrizTransicionEstadosHeader: string[],
    private AFDEquivalent: string[][]
  ) {
    super();

    this.header = this.matrizTransicionEstadosHeader.map(
      (headerName) =>
        new TableHeaderItem({
          data: { title: headerName },
          template: this.headerTemplate,
        })
    );

    this.tableData = this.AFDEquivalent.map((row: string[]) =>
      row.map(
        (element: string) =>
          new TableItem({
            data: element,
            template: this.columnTemplate,
          })
      )
    );

    this.pageLength = this.tableData.length;
    this.totalDataLength = this.tableData.length;

    this.selectPage(1);
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
          index < Math.min(page * this.pageLength, this.tableData.length)
      )
      .map((data: TableItem[], _index: number) => {
        return data;
      });
  }
}
