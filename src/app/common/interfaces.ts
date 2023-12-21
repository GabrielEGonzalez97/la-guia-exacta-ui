import { ISubject } from '../catedras/interfaces';

export interface IPageSection {
  name: string;
  route: string;
  cardFrontImagePath?: string;
  cardBackImagePath?: string;
  subSections?: IPageSection[];
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
