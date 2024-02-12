export enum Careers {
  INGENIERIA_DE_SISTEMAS = 'Ingeniería de Sistemas',
  INGENIERIA_DE_SISTEMAS_PLAN_2011 = 'Ingeniería de Sistemas (Plan 2011)',
  INGENIERIA_DE_SISTEMAS_PLAN_2024 = 'Ingeniería de Sistemas (Plan 2024)',
  TUDAI = 'TUDAI',
  LTA = 'Licenciatura en Tecnología Ambiental',
}

export type CareerName = (typeof Careers)[keyof typeof Careers];

export const INGENIERIA_DE_SISTEMAS_NAME: CareerName =
  Careers.INGENIERIA_DE_SISTEMAS;

export const INGENIERIA_DE_SISTEMAS_PLAN_2011_NAME: CareerName =
  Careers.INGENIERIA_DE_SISTEMAS_PLAN_2011;

export const INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME: CareerName =
  Careers.INGENIERIA_DE_SISTEMAS_PLAN_2024;

export const LTA_NAME: CareerName = Careers.LTA;

export const TUDAI_NAME: CareerName = Careers.TUDAI;

enum Years {
  FIRST_YEAR = 'Primero',
  SECOND_YEAR = 'Segundo',
  THIRD_YEAR = 'Tercero',
  FOURTH_YEAR = 'Cuarto',
  FIFTH_YEAR = 'Quinto',
}

export type YearType = (typeof Years)[keyof typeof Years];

export const FIRST_YEAR_NAME: YearType = Years.FIFTH_YEAR;

export const SECOND_YEAR_NAME: YearType = Years.SECOND_YEAR;

export const THIRD_YEAR_NAME: YearType = Years.THIRD_YEAR;

export const FOURTH_YEAR_NAME: YearType = Years.FOURTH_YEAR;

export const FIFTH_YEAR_NAME: YearType = Years.FIFTH_YEAR;

enum Quarters {
  FIRST_QUARTER = '1er cuatri',
  SECOND_QUARTER = '2do cuatri',
}

export type QuarterType = (typeof Quarters)[keyof typeof Quarters];

export const FIRST_QUARTER_NAME: QuarterType = Quarters.FIRST_QUARTER;

export const SECOND_QUARTER_NAME: QuarterType = Quarters.SECOND_QUARTER;

enum Correlativities {
  CORRELATIVE_CURSADA = 'Cursada',
  CORRELATIVE_FINAL = 'Final',
}

export type CorrelativityType =
  (typeof Correlativities)[keyof typeof Correlativities];

export const CORRELATIVE_CURSADA_NAME: CorrelativityType =
  Correlativities.CORRELATIVE_CURSADA;

export const CORRELATIVE_FINAL_NAME: CorrelativityType =
  Correlativities.CORRELATIVE_FINAL;

export interface ISubject {
  id: string;
  name: string;
  status: string;
  career: CareerName;
  year: YearType;
  quarter: QuarterType;
  modalidadLink: string;
  programaLink: string;
  webLink: string;
  moodleLink: string;
  clasesLink: string;
  resumenesLink: string;
  parcialesLink: string;
  finalesLink: string;
  correlatives: ICorrelativeSubject[];
}

export interface ICorrelativeSubject {
  typeOfCorrelativity: CorrelativityType;
  subject: ISubject;
}
