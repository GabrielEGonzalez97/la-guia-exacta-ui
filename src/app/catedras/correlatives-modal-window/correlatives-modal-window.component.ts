import { Component, Inject, OnInit } from '@angular/core';
import { BaseModal } from 'carbon-components-angular';
import { CORRELATIVE_CURSADA_NAME, ICorrelativeSubject } from '../interfaces';

@Component({
  selector: 'app-correlatives-modal-window',
  templateUrl: './correlatives-modal-window.component.html',
  styleUrls: ['./correlatives-modal-window.component.scss'],
})
export class CorrelativesModalWindowComponent
  extends BaseModal
  implements OnInit
{
  public cursadasCorrelatives: ICorrelativeSubject[] = [];
  public finalesCorrelatives: ICorrelativeSubject[] = [];

  constructor(
    @Inject('correlatives') public correlatives: ICorrelativeSubject[]
  ) {
    super();
  }

  public ngOnInit(): void {
    this.correlatives.forEach((correlative: ICorrelativeSubject) => {
      if (correlative.typeOfCorrelativity == CORRELATIVE_CURSADA_NAME) {
        this.cursadasCorrelatives.push(correlative);
      } else {
        this.finalesCorrelatives.push(correlative);
      }
    });
  }
}
