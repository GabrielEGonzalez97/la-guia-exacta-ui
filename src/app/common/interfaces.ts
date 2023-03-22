import { ISubject } from '../catedras/interfaces';

export interface ISubjectWithSelection {
  subject: ISubject;
  color: string;
}

export interface IGoogleDriveFolderInformation {
  id: string;
  name: string;
}
