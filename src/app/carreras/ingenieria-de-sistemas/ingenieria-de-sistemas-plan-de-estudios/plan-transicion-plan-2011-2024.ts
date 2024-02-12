import { TemplateRef } from '@angular/core';
import {
  TableHeaderItem,
  TableItem,
  TableModel,
} from 'carbon-components-angular';

export class PlanTransicionPlan2011Plan2024TableModel extends TableModel {
  private tableData: TableItem[][];
  private initData = [];

  private tableHeaders: {
    name: string;
    description: string;
  }[] = [
    {
      name: 'Plan 2011',
      description: 'Plan 2011',
    },
    {
      name: 'Plan 2024',
      description: 'Plan 2024',
    },
  ];

  constructor(
    private headerTemplate: TemplateRef<unknown>,
    private columnTemplate: TemplateRef<unknown>
  ) {
    super();

    this.header = this.tableHeaders.map(
      ({ name, description }) =>
        new TableHeaderItem({
          data: { title: name, description },
          template: this.headerTemplate,
        })
    );

    this.initData = [
      { firstColumn: 'Primer Año', secondColumn: '' },
      {
        firstColumn: 'Introducción a la Programación I',
        secondColumn: 'Introducción a la Programación I',
      },
      {
        firstColumn: 'Análisis Matemático I',
        secondColumn: 'Cálculo I',
      },
      {
        firstColumn: 'Álgebra I',
        secondColumn: 'Introducción al Álgebra',
      },
      {
        firstColumn: 'Matemática Discreta',
        secondColumn: '',
      },
      {
        firstColumn: 'Química',
        secondColumn: '-',
      },
      {
        firstColumn: 'Ciencias de la Computación I',
        secondColumn: 'Lenguajes formales y autómatas',
      },
      {
        firstColumn: 'Introducción a la Programación II',
        secondColumn: 'Introducción a la Programación II',
      },
      {
        firstColumn: 'Álgebra Lineal',
        secondColumn: 'Álgebra Lineal',
      },
      {
        firstColumn: 'Física General',
        secondColumn: 'Física I',
      },
      {
        firstColumn: '',
        secondColumn: '',
      },
      {
        firstColumn: 'Segundo Año',
        secondColumn: '',
      },
      {
        firstColumn: 'Ciencias de la Computación II',
        secondColumn: 'Se reconoce por asignatura electiva (75 hs)',
      },
      {
        firstColumn: 'Análisis y Diseño de Algoritmos I',
        secondColumn: 'Análisis y Diseño de Algoritmos I',
      },
      {
        firstColumn: 'Introducción a la Arquitectura de Sistemas',
        secondColumn: 'Introducción a los Sistemas Informáticos',
      },
      {
        firstColumn: 'Análisis Matemático II',
        secondColumn: 'Cálculo II',
      },
      {
        firstColumn: 'Electricidad y Magnetismo',
        secondColumn: 'Física II',
      },
      {
        firstColumn: 'Análisis y Diseño de Algoritmos II',
        secondColumn: 'Análisis y Diseño de Algoritmos II',
      },
      {
        firstColumn: 'Comunicación de Datos I',
        secondColumn: 'Redes de Computadoras I',
      },
      {
        firstColumn: 'Probabilidades y estadísticas',
        secondColumn: 'Probabilidad y Estadística',
      },
      {
        firstColumn: 'Electrónica Digital',
        secondColumn: 'Diseño Lógico',
      },
      {
        firstColumn: 'Inglés',
        secondColumn: 'Inglés',
      },
      {
        firstColumn: '',
        secondColumn: '',
      },
      {
        firstColumn: 'Tercer Año',
        secondColumn: '',
      },
      {
        firstColumn: 'Programación Orientada a Objetos',
        secondColumn: 'Programación Orientada a Objetos',
      },
      {
        firstColumn: 'Estructuras de Almacenamiento de Datos',
        secondColumn: 'Base de Datos I',
      },
      {
        firstColumn: 'Metodologías de Desarrollo de Software I',
        secondColumn: 'Metodologías de Desarrollo de Software',
      },
      {
        firstColumn: 'Arquitectura de Computadoras I',
        secondColumn: 'Arquitectura de Computadoras I',
      },
      {
        firstColumn: 'Programación Exploratoria',
        secondColumn: 'Se reconoce por asignatura electiva (75 hs)',
      },
      {
        firstColumn: 'Base de Datos I',
        secondColumn: 'Base de Datos II',
      },
      {
        firstColumn: 'Lenguajes de Programación I',
        secondColumn: 'Lenguajes y Paradigmas',
      },
      {
        firstColumn: 'Sistemas Operativos I',
        secondColumn: 'Sistemas Operativos',
      },
      {
        firstColumn: 'Investigación Operativa I',
        secondColumn: 'Se reconoce por asignatura electiva (90 hs)',
      },
      {
        firstColumn: '',
        secondColumn: '',
      },
      {
        firstColumn: 'Cuarto Año',
        secondColumn: '',
      },
      {
        firstColumn: 'Arquitectura de Computadoras y Técnicas Digitales',
        secondColumn: 'Arquitectura de Computadoras II',
      },
      {
        firstColumn: 'Teoría de la Información',
        secondColumn: 'Teoría de la Información',
      },
      {
        firstColumn: 'Comunicación de Datos II',
        secondColumn: 'Redes de computadoras II',
      },
      {
        firstColumn: 'Introducción al Cálculo Diferencial e Integral',
        secondColumn: '-',
      },
      {
        firstColumn: 'Diseño de Sistemas de Software',
        secondColumn: 'Ingenieria de Software I',
      },
      {
        firstColumn: 'Diseño de Compiladores',
        secondColumn: 'Compiladores e Intérpretes',
      },
      {
        firstColumn: 'Fundamentos de Economía y Proyectos de Inversión',
        secondColumn: 'Formulación y Evaluación de Proyectos TICs',
      },
      {
        firstColumn: 'Organización Empresarial',
        secondColumn: 'Organización y gestión empresarial',
      },
      {
        firstColumn: 'Legislación y Gestión Ambiental',
        secondColumn: 'Ética y legislación de la práctica profesional',
      },
      {
        firstColumn: '',
        secondColumn: '',
      },
      {
        firstColumn: 'Quinto Año',
        secondColumn: '',
      },
      {
        firstColumn: 'Ingeniería de Software',
        secondColumn: 'Ingenieria de Software II',
      },
      {
        firstColumn: '',
        secondColumn: 'Calidad de Software',
      },
      {
        firstColumn: '-(*)',
        secondColumn: 'Fundamentos de Ciencias de Datos',
      },
      {
        firstColumn: '-(*)',
        secondColumn: 'Inteligencia Artificial',
      },
      {
        firstColumn: '-(*)',
        secondColumn: 'Programación WEB',
      },
      {
        firstColumn: '-(*)',
        secondColumn: 'Ciberseguridad',
      },
      {
        firstColumn: '',
        secondColumn: '',
      },
      {
        firstColumn: 'PPS',
        secondColumn: 'PPS (**)',
      },
    ];

    this.tableData = this.initData.map((data) => {
      return [
        new TableItem({
          data: data.firstColumn,
          template: this.columnTemplate,
        }),
        new TableItem({
          data: data.secondColumn,
          template: this.columnTemplate,
        }),
      ];
    });

    this.pageLength = this.initData.length;
    this.totalDataLength = this.initData.length;

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
          index < Math.min(page * this.pageLength, this.initData.length)
      )
      .map((data, _index) => {
        return data;
      });
  }
}
