export type CareerName = 'Ingenieria de Sistemas' | 'TUDAI';

export const INGENIERIA_DE_SISTEMAS_NAME = 'Ingenieria de Sistemas';

export const TUDAI_NAME = 'TUDAI';

export type QuarterType = 'Primero' | 'Segundo';

export const FIRST_QUARTER_NAME = 'Primero';

export const SECOND_QUARTER_NAME = 'Segundo';

export interface ISubjectType {
  name: string;
  career: CareerName;
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
}
