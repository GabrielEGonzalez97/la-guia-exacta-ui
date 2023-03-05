import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CORRELATIVE_CURSADA_NAME, ICorrelativeSubject } from '../interfaces';

@Component({
  selector: 'app-correlatives-modal-window',
  templateUrl: './correlatives-modal-window.component.html',
  styleUrls: ['./correlatives-modal-window.component.scss'],
})
export class CorrelativesModalWindowComponent implements OnInit {
  @Input() public isModalWindowOpen: boolean;
  @Input() public correlatives: ICorrelativeSubject[] = [];

  @Output() isModalWindowOpenChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  public cursadasCorrelatives: ICorrelativeSubject[] = [];
  public finalesCorrelatives: ICorrelativeSubject[] = [];

  constructor() {}

  public ngOnInit(): void {
    this.correlatives.forEach((correlative: ICorrelativeSubject) => {
      if (correlative.typeOfCorrelativity == CORRELATIVE_CURSADA_NAME) {
        this.cursadasCorrelatives.push(correlative);
      } else {
        this.finalesCorrelatives.push(correlative);
      }
    });
  }

  public closeModalWindow(): void {
    this.isModalWindowOpenChange.emit(false);
  }
}
