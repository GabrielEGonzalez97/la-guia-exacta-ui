export type CareerName = 'Ingenieria de Sistemas' | 'TUDAI';

export const INGENIERIA_DE_SISTEMAS_NAME = 'Ingenieria de Sistemas';

export const TUDAI_NAME = 'TUDAI';

export type YearType = 'Primero' | 'Segundo' | 'Tercero' | 'Cuarto' | 'Quinto';

export const FIRST_YEAR_NAME = 'Primero';

export const SECOND_YEAR_NAME = 'Segundo';

export const THIRD_YEAR_NAME = 'Tercero';

export const FOURTH_YEAR_NAME = 'Cuarto';

export const FIFTH_YEAR_NAME = 'Quinto';

export type QuarterType = 'Primero' | 'Segundo';

export const FIRST_QUARTER_NAME = 'Primero';

export const SECOND_QUARTER_NAME = 'Segundo';

export interface ISubject {
  id: string;
  name: string;
  status: string;
  career: CareerName;
  year: YearType;
  quarter: QuarterType;
  teacher: string;
  contactEmail: string;
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

export type CorrelativityType = 'Cursada' | 'Final';

export const CORRELATIVE_CURSADA_NAME = 'Cursada';

export const CORRELATIVE_FINAL_NAME = 'Final';

export interface ICorrelativeSubject {
  typeOfCorrelativity: CorrelativityType;
  subject: ISubject;
}
