import { Careers } from '../catedras/interfaces';
import { IPageSection, ISocialMedia } from './interfaces';

export const PAGE_TITLE: string = 'La guía exacta';

// ---------------------- CARRERAS SECTIONS ----------------------

export const INGENIERIA_DE_SISTEMAS_PAGE_SECTION: IPageSection = {
  name: Careers.INGENIERIA_DE_SISTEMAS,
  route: 'carreras/ingenieria-de-sistemas',
  titleGoogleAnalytics: 'Carrera-Ingenieria-de-Sistemas',
};

export const LTA_PAGE_SECTION: IPageSection = {
  name: Careers.LTA,
  route: 'carreras/licenciatura-en-tecnologia-ambiental',
  titleGoogleAnalytics: 'Carrera-Licenciatura-en-Tecnologia-Ambiental',
};

export const TUDAI_PAGE_SECTION: IPageSection = {
  name: Careers.TUDAI,
  route: 'carreras/tudai',
  titleGoogleAnalytics: 'Carrera-TUDAI',
};

export const CARRERAS_SECTIONS: IPageSection[] = [
  INGENIERIA_DE_SISTEMAS_PAGE_SECTION,
  LTA_PAGE_SECTION,
  TUDAI_PAGE_SECTION,
];

// ---------------------- HERRAMIENTAS SECTIONS ----------------------

export const OPERACIONES_CON_MATRICES_PAGE_SECTION: IPageSection = {
  name: 'Operaciones con matrices',
  route: 'herramientas/operaciones-con-matrices',
  titleGoogleAnalytics: 'Operaciones-con-Matrices',
  cardFrontImagePath:
    'assets/images/herramientas-logos/operaciones-con-matrices-front-logo.svg',
  cardBackImagePath:
    'assets/images/herramientas-logos/operaciones-con-matrices-back-logo.svg',
};

export const CONSTRUCTOR_DE_AUTOMATAS_PAGE_SECTION: IPageSection = {
  name: 'Constructor de autómatas',
  route: 'herramientas/constructor-automatas',
  titleGoogleAnalytics: 'Constructor-Automatas',
  cardFrontImagePath:
    'assets/images/herramientas-logos/constructor-automatas-front-logo.svg',
  cardBackImagePath:
    'assets/images/herramientas-logos/constructor-automatas-back-logo.svg',
};

export const HERRAMIENTAS_SECTIONS: IPageSection[] = [
  OPERACIONES_CON_MATRICES_PAGE_SECTION,
  CONSTRUCTOR_DE_AUTOMATAS_PAGE_SECTION,
];

// ---------------------- PAGE SECTIONS ----------------------

export const CARRERAS_PAGE_SECTION: IPageSection = {
  name: 'Carreras',
  route: 'carreras',
  titleGoogleAnalytics: 'Carreras',
  cardFrontImagePath: 'assets/images/home-logos/carreras-front-logo.svg',
  cardBackImagePath: 'assets/images/home-logos/carreras-back-logo.svg',
  subSections: CARRERAS_SECTIONS,
};

export const CATEDRAS_PAGE_SECTION: IPageSection = {
  name: 'Cátedras',
  route: 'catedras',
  titleGoogleAnalytics: 'Catedras',
  cardFrontImagePath: 'assets/images/home-logos/catedras-front-logo.svg',
  cardBackImagePath: 'assets/images/home-logos/catedras-back-logo.svg',
};

export const CURSOS_GRATUITOS_PAGE_SECTION: IPageSection = {
  name: 'Cursos gratuitos',
  route: 'cursos-gratuitos',
  titleGoogleAnalytics: 'Cursos-Gratuitos',
  cardFrontImagePath:
    'assets/images/home-logos/cursos-gratuitos-front-logo.svg',
  cardBackImagePath: 'assets/images/home-logos/cursos-gratuitos-back-logo.svg',
};

export const SUBIR_APORTES_PAGE_SECTION: IPageSection = {
  name: 'Subir aportes',
  route: 'subir-aportes',
  titleGoogleAnalytics: 'Subir-Aportes',
  cardFrontImagePath: 'assets/images/home-logos/subir-aportes-front-logo.svg',
  cardBackImagePath: 'assets/images/home-logos/subir-aportes-back-logo.svg',
};

export const HERRAMIENTAS_PAGE_SECTION: IPageSection = {
  name: 'Herramientas',
  route: 'herramientas',
  titleGoogleAnalytics: 'Herramientas',
  cardFrontImagePath: 'assets/images/home-logos/herramientas-front-logo.svg',
  cardBackImagePath: 'assets/images/home-logos/herramientas-back-logo.svg',
  subSections: HERRAMIENTAS_SECTIONS,
};

export const PAGE_SECTIONS: IPageSection[] = [
  CARRERAS_PAGE_SECTION,
  CATEDRAS_PAGE_SECTION,
  CURSOS_GRATUITOS_PAGE_SECTION,
  SUBIR_APORTES_PAGE_SECTION,
  HERRAMIENTAS_PAGE_SECTION,
];

// ---------------------- SOCIAL MEDIAS ----------------------

export const SOCIAL_MEDIAS: ISocialMedia[] = [
  {
    name: PAGE_TITLE,
    link: 'https://www.instagram.com/laguiaexacta/',
    iconPath: 'assets/images/instagram-logo.svg',
  },
  {
    name: PAGE_TITLE,
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
