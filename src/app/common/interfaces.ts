import { ISubject } from '../catedras/interfaces';

export interface IPageSection {
  name: string;
  route: string;
  titleGoogleAnalytics?: string;
  cardFrontImagePath?: string;
  cardBackImagePath?: string;
  subSections?: IPageSection[];
}

export interface ISocialMedia {
  name: string;
  link: string;
  iconPath: string;
}

export interface ISubjectWithSelection {
  subject: ISubject;
  color: string;
}

export interface IGoogleDriveFolderInformation {
  id: string;
  name: string;
  webViewLink: string;
}

export interface IResourceDBInformation {
  id: string;
  catedraId: string;
  name: string;
  webViewLink: string;
  createdTime: string;
}

export interface ICatedraDBInformation {
  id: string;
  name: string;
  career: string;
  year: string;
  quarter: string;
  modalidadLink: string;
  programaLink: string;
  webLink: string;
  moodleLink: string;
  clasesLink: string;
  resumenesLink: string;
  parcialesLink: string;
  finalesLink: string;
}

export interface IResourcesTableInfo {
  catedra: string;
  career: string;
  resource: string;
  createdTime: string;
  webViewLink: string;
}
