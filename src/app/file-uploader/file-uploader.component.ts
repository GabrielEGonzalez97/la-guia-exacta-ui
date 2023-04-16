import { Component, OnInit } from '@angular/core';
import { FileItem, ListItem } from 'carbon-components-angular';
import { ingenieria_de_sistemas_subjects_plan_2011 } from '../catedras/ingenieria-de-sistemas-plan-2011';
import { ISubject } from '../catedras/interfaces';
import { tudai_subjects } from '../catedras/tudai_subjects';
import { HttpService } from '../services/http.service';
import { IWithState, UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent implements OnInit {
  public uploadFiles: Set<FileItem> = new Set<FileItem>();

  public allSubjects: ISubject[] = [
    ...ingenieria_de_sistemas_subjects_plan_2011,
    ...tudai_subjects,
  ];

  public subjectsComboBoxItems: ListItem[] = [];
  public typeOfContributionsComboBoxItems: ListItem[] = [];
  public yearComboBoxItems: ListItem[] = [];
  public monthComboBoxItems: ListItem[] = [];

  public subjectFileName: string = '';
  public typeOfContributionFileName: string = '';
  public yearFileName: string = '';
  public monthFileName: string = '';
  public filesName: string = '';

  public isFilesInputNameVisible: boolean = false;

  public isSubmitFilesButtonDisabled: boolean = true;
  public isFileSuccessfullySubmittedModalOpen: boolean = false;
  public isFileUnsuccessfullySubmittedModalOpen: boolean = false;

  constructor(
    private httpService: HttpService,
    private utilsService: UtilsService
  ) {}

  public ngOnInit(): void {
    this.allSubjects.forEach((subject: ISubject) => {
      this.subjectsComboBoxItems.push({
        content: subject.name,
        selected: false,
      });
    });

    this.typeOfContributionsComboBoxItems = [
      { content: 'Resumen-Apunte', selected: false },
      { content: 'Parcialito', selected: false },
      { content: 'Parcial', selected: false },
      { content: 'Recuperatorio', selected: false },
      { content: 'Prefinal', selected: false },
      { content: 'Final', selected: false },
    ];

    this.utilsService.completeDropdownWithYears(this.yearComboBoxItems);
    this.utilsService.completeDropdownWithMonths(this.monthComboBoxItems);
  }

  public onDroppedFile(_): void {
    if (this.uploadFiles.size > 0) {
      this.isFilesInputNameVisible = true;
    } else {
      this.isFilesInputNameVisible = false;
    }
  }

  public onSubjectFileNameChange(newFileName: any): void {
    this.subjectFileName = newFileName.item.content;
    this.verifyIfSubmitFilesButtonIsDisabled();
  }

  public onClearSubjectFileName(): void {
    this.subjectFileName = '';
    this.verifyIfSubmitFilesButtonIsDisabled();
  }

  public onTypeOfContributionFileNameChange(
    newTypeOfContributionFileName: any
  ): void {
    this.typeOfContributionFileName =
      newTypeOfContributionFileName.item.content;
    this.verifyIfSubmitFilesButtonIsDisabled();
  }

  public onClearTypeOfContributionFileName(): void {
    this.typeOfContributionFileName = '';
    this.verifyIfSubmitFilesButtonIsDisabled();
  }

  public onYearFileNameChange(newYearFileName: any): void {
    this.yearFileName = newYearFileName.item.content;
    this.verifyIfSubmitFilesButtonIsDisabled();
  }

  public onClearYearFileName(): void {
    this.yearFileName = '';
    this.verifyIfSubmitFilesButtonIsDisabled();
  }

  public onMonthFileNameChange(newMonthFileName: any): void {
    this.monthFileName = newMonthFileName.item.content;
    this.verifyIfSubmitFilesButtonIsDisabled();
  }

  public onClearMonthYearFileName(): void {
    this.monthFileName = '';
    this.verifyIfSubmitFilesButtonIsDisabled();
  }

  public verifyIfSubmitFilesButtonIsDisabled(): void {
    if (
      this.subjectFileName !== '' &&
      this.typeOfContributionFileName !== '' &&
      this.yearFileName !== '' &&
      this.monthFileName !== ''
    ) {
      this.isSubmitFilesButtonDisabled = false;
    } else {
      this.isSubmitFilesButtonDisabled = true;
    }
  }

  public onSubmitFiles(): void {
    this.filesName =
      this.subjectFileName +
      ' ' +
      this.typeOfContributionFileName +
      ' ' +
      this.yearFileName +
      ' ' +
      this.monthFileName;

    this.uploadFiles.forEach((file: FileItem) => {
      let fileReader = new FileReader();
      fileReader.onload = (_) => {
        fileReader.result;
      };
      fileReader.readAsText(file.file);
      this.httpService.uploadFileToDrive(file.file, this.filesName).subscribe(
        (result: IWithState<any>) => {
          this.isFilesInputNameVisible = false;
          this.isSubmitFilesButtonDisabled = true;
          if (result.state === 'done') {
            this.isFileSuccessfullySubmittedModalOpen = true;
          } else if (result.state === 'error') {
            this.isFileUnsuccessfullySubmittedModalOpen = true;
          }
        },
        (_) => {
          this.isFilesInputNameVisible = false;
          this.isSubmitFilesButtonDisabled = true;
          this.isFileUnsuccessfullySubmittedModalOpen = true;
        }
      );
    });

    this.uploadFiles = new Set<FileItem>();
    this.filesName = '';
    this.onClearSubjectFileName();
    this.onClearTypeOfContributionFileName();
    this.onClearYearFileName();
    this.onClearMonthYearFileName();
  }

  public closeFileSuccessfullySubmittedModal(): void {
    this.isFileSuccessfullySubmittedModalOpen = false;
  }

  public closeFileUnsuccessfullySubmittedModal(): void {
    this.isFileUnsuccessfullySubmittedModalOpen = false;
  }
}
