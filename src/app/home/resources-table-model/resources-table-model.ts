import { TemplateRef } from '@angular/core';
import {
  TableHeaderItem,
  TableItem,
  TableModel,
} from 'carbon-components-angular';
import {
  ICatedraDBInformation,
  IResourceDBInformation,
} from 'src/app/common/interfaces';

export class ResourcesTableModel extends TableModel {
  private tableData: TableItem[][];

  private tableHeaders: {
    name: string;
    description: string;
  }[] = [
    {
      name: 'Cátedra',
      description: 'Cátedra',
    },
    {
      name: 'Carrera',
      description: 'Carrera',
    },
    {
      name: 'Recurso',
      description: 'Recurso',
    },
    {
      name: 'Fecha de subida',
      description: 'Fecha de subida',
    },
    {
      name: 'Link',
      description: 'Link',
    },
  ];

  constructor(
    private headerTemplate: TemplateRef<unknown>,
    private columnTemplate: TemplateRef<unknown>,
    private tagTemplate: TemplateRef<unknown>,
    private linkTemplate: TemplateRef<unknown>,
    private recursos: IResourceDBInformation[],
    private catedras: ICatedraDBInformation[]
  ) {
    super();

    this.header = this.tableHeaders.map(
      ({ name, description }) =>
        new TableHeaderItem({
          data: { title: name, description },
          template: this.headerTemplate,
        })
    );

    this.recursos.sort(
      (a: IResourceDBInformation, b: IResourceDBInformation) => {
        const dateA = new Date(a.createdTime);
        const dateB = new Date(b.createdTime);

        return dateB.getTime() - dateA.getTime();
      }
    );

    this.tableData = this.recursos.map((recurso: IResourceDBInformation) => {
      return [
        new TableItem({
          data: this.catedras.find(
            (catedra) => catedra.id === recurso.catedraId
          ).name,
          template: this.columnTemplate,
        }),
        new TableItem({
          data: this.catedras
            .find((catedra) => catedra.id === recurso.catedraId)
            .career.replace(/\s*\([^)]*\)/, ''),
          template: this.tagTemplate,
        }),
        new TableItem({
          data: recurso.name.slice(0, recurso.name.lastIndexOf('.')),
          template: this.columnTemplate,
        }),
        new TableItem({
          data: this.formatDateTime(recurso.createdTime),
          template: this.columnTemplate,
        }),
        new TableItem({
          data: recurso.webViewLink,
          template: this.linkTemplate,
        }),
      ];
    });

    this.pageLength = 10;
    this.totalDataLength = this.recursos.length;

    this.selectPage(1);
  }

  private formatDateTime(dateTimeString: string): string {
    const dateObj: Date = new Date(dateTimeString);

    const day: string = dateObj.getDate().toString().padStart(2, '0');
    const month: string = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const year: string = dateObj.getFullYear().toString();

    return `${day}/${month}/${year}`;
  }

  public selectPage(page: number): void {
    this.data = this.getPage(page);
    this.totalDataLength = this.tableData.length;
    this.currentPage = Number(page);
  }

  private getPage(page: number): TableItem[][] {
    return this.tableData
      .filter(
        (_val, index) =>
          index >= page * this.pageLength - this.pageLength &&
          index < Math.min(page * this.pageLength, this.recursos.length)
      )
      .map((data, _index) => {
        return data;
      });
  }
}
