import { Careers } from '../catedras/interfaces';
import { IPageSection, ISocialMedia } from './interfaces';

export const PAGE_SECTIONS: IPageSection[] = [
  {
    name: 'Carreras',
    route: 'carreras/ingenieria-de-sistemas',
    cardFrontImagePath: 'assets/images/home-logos/carreras-front-logo.svg',
    cardBackImagePath: 'assets/images/home-logos/carreras-back-logo.svg',
    subSections: [
      {
        name: Careers.INGENIERIA_DE_SISTEMAS,
        route: 'carreras/ingenieria-de-sistemas',
      },
      {
        name: Careers.LTA,
        route: 'carreras/licenciatura-en-tecnologia-ambiental',
      },
      {
        name: Careers.TUDAI,
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
    cardFrontImagePath: 'assets/images/home-logos/herramientas-front-logo.svg',
    cardBackImagePath: 'assets/images/home-logos/herramientas-back-logo.svg',
    subSections: [
      {
        name: 'Operaciones con matrices',
        route: 'herramientas/operaciones-con-matrices',
      },
      {
        name: 'Constructor de autómatas',
        route: 'herramientas/constructor-automatas',
      },
    ],
  },
];

export const SOCIAL_MEDIAS: ISocialMedia[] = [
  {
    name: 'La guía exacta',
    link: 'https://www.instagram.com/laguiaexacta/',
    iconPath: 'assets/images/instagram-logo.svg',
  },
  {
    name: 'La guía exacta',
    link: 'https://www.youtube.com/@laguiaexacta',
    iconPath: 'assets/images/you-tube-logo.svg',
  },
  {
    name: 'AMU',
    link: 'https://www.instagram.com/amu.mpe.exactas/',
    iconPath: 'assets/images/instagram-logo.svg',
  },
  {
    name: 'Moodle',
    link: 'https://moodle.exa.unicen.edu.ar/',
    iconPath: 'assets/images/www-logo.svg',
  },
  {
    name: 'Guaraní',
    link: 'https://guarani.unicen.edu.ar/autogestion/exactas/',
    iconPath: 'assets/images/www-logo.svg',
  },
  {
    name: 'Exactas',
    link: 'https://exa.unicen.edu.ar/',
    iconPath: 'assets/images/www-logo.svg',
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
