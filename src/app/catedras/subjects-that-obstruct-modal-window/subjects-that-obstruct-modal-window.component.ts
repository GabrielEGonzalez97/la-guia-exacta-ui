import { Component, Inject, OnInit } from '@angular/core';
import { BaseModal } from 'carbon-components-angular';
import {
  CORRELATIVE_CURSADA_NAME,
  CORRELATIVE_FINAL_NAME,
  ICorrelativeSubject,
  ISubject,
} from '../interfaces';

@Component({
  selector: 'app-subjects-that-obstruct-modal-window',
  templateUrl: './subjects-that-obstruct-modal-window.component.html',
  styleUrls: ['./subjects-that-obstruct-modal-window.component.scss'],
})
export class SubjectsThatObstructModalWindowComponent
  extends BaseModal
  implements OnInit
{
  public subjectsThatObstructCursadas: ICorrelativeSubject[] = [];
  public subjectsThatObstructFinales: ICorrelativeSubject[] = [];

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
            if (
              correlativeSubject.typeOfCorrelativity == CORRELATIVE_CURSADA_NAME
            ) {
              this.subjectsThatObstructCursadas.push({
                typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
                subject: subject,
              });
            } else {
              this.subjectsThatObstructFinales.push({
                typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
                subject: subject,
              });
            }
          }
        }
      );
    });
  }
}
