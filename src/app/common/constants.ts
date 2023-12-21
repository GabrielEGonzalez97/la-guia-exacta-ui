import { IPageSection } from './interfaces';

export const PAGE_SECTIONS: IPageSection[] = [
  {
    name: 'Carreras',
    route: 'carreras/ingenieria-de-sistemas',
    cardFrontImagePath: 'assets/images/home-logos/carreras-front-logo.svg',
    cardBackImagePath: 'assets/images/home-logos/carreras-back-logo.svg',
    subSections: [
      {
        name: 'Ingeniería de Sistemas',
        route: 'carreras/ingenieria-de-sistemas',
      },
      {
        name: 'Licenciatura en Tecnologia Ambiental',
        route: 'carreras/licenciatura-en-tecnologia-ambiental',
      },
      {
        name: 'TUDAI',
        route: 'carreras/tudai',
      },
    ],
  },
  {
    name: 'Cátedras',
    route: 'catedras',
    cardFrontImagePath: 'assets/images/home-logos/catedras-front-logo.svg',
    cardBackImagePath: 'assets/images/home-logos/catedras-back-logo.svg',
  },
  {
    name: 'Cursos gratuitos',
    route: 'cursos-gratuitos',
    cardFrontImagePath:
      'assets/images/home-logos/cursos-gratuitos-front-logo.svg',
    cardBackImagePath:
      'assets/images/home-logos/cursos-gratuitos-back-logo.svg',
  },
  {
    name: 'Subir aportes',
    route: 'subir-aportes',
    cardFrontImagePath: 'assets/images/home-logos/subir-aportes-front-logo.svg',
    cardBackImagePath: 'assets/images/home-logos/subir-aportes-back-logo.svg',
  },
  {
    name: 'Herramientas',
    route: 'herramientas/operaciones-con-matrices',
    subSections: [
      {
        name: 'Operaciones con matrices',
        route: 'herramientas/operaciones-con-matrices',
      },
    ],
  },
];

export const MONTHS: string[] = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

export const PARCIALES_TYPES: string[] = [
  'Prefinal',
  'Recuperatorio',
  'Parcial',
];

export const DEFAULT_COLOR_SUBJECT: string = '#FFFF8D';
export const SELECTED_COLOR_SUBJECT: string = '#C6C6C6';
export const CORRELATIVE_COLOR_SUBJECT: string = '#FA4D56';
export const REQUISITO_CURSADA_COLOR_SUBJECT: string = '#6FDC8C';
export const REQUISITO_FINAL_COLOR_SUBJECT: string = '#24A148';
