import { TemplateRef } from '@angular/core';
import {
  TableHeaderItem,
  TableItem,
  TableModel,
} from 'carbon-components-angular';
import { IResourcesTableInfo } from 'src/app/common/interfaces';

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
    private resources: IResourcesTableInfo[]
  ) {
    super();

    this.header = this.tableHeaders.map(
      ({ name, description }) =>
        new TableHeaderItem({
          data: { title: name, description },
          template: this.headerTemplate,
        })
    );

    this.resources.sort((a: IResourcesTableInfo, b: IResourcesTableInfo) => {
      const datePartsA: string = a.createdTime.split('/').reverse().join('/');
      const datePartsB: string = b.createdTime.split('/').reverse().join('/');
      return new Date(datePartsB).getTime() - new Date(datePartsA).getTime();
    });

    this.tableData = this.resources.map((resource: IResourcesTableInfo) => {
      return [
        new TableItem({
          data: resource.catedra,
          template: this.columnTemplate,
        }),
        new TableItem({
          data: resource.career,
          template: this.tagTemplate,
        }),
        new TableItem({
          data: resource.resource,
          template: this.columnTemplate,
        }),
        new TableItem({
          data: resource.createdTime,
          template: this.columnTemplate,
        }),
        new TableItem({
          data: resource.webViewLink,
          template: this.linkTemplate,
        }),
      ];
    });

    this.pageLength = 10;
    this.totalDataLength = this.resources.length;

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
        (_val, index) =>
          index >= page * this.pageLength - this.pageLength &&
          index < Math.min(page * this.pageLength, this.resources.length)
      )
      .map((data, _index) => {
        return data;
      });
  }
}
