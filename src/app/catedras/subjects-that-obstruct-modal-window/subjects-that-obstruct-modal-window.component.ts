import { Component, Inject, OnInit } from '@angular/core';
import { BaseModal } from 'carbon-components-angular';
import { ICorrelativeSubject, ISubject } from '../interfaces';

@Component({
  selector: 'app-subjects-that-obstruct-modal-window',
  templateUrl: './subjects-that-obstruct-modal-window.component.html',
  styleUrls: ['./subjects-that-obstruct-modal-window.component.scss'],
})
export class SubjectsThatObstructModalWindowComponent
  extends BaseModal
  implements OnInit
{
  public subjectsThatObstruct: ICorrelativeSubject[] = [];

  constructor(
    @Inject('subjectToEvaluate') public subjectToEvaluate: ISubject,
    @Inject('allSubjects') public allSubjects: ISubject[]
  ) {
    super();
  }

  public ngOnInit(): void {
    this.allSubjects.forEach((subject: ISubject) => {
      subject.correlatives.forEach(
        (correlativeSubject: ICorrelativeSubject) => {
          if (correlativeSubject.subject.id == this.subjectToEvaluate.id) {
            this.subjectsThatObstruct.push({
              typeOfCorrelativity: 'Cursada',
              subject: subject,
            });
          }
        }
      );
    });
  }
}
