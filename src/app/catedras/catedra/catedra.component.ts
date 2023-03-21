import { Component, Input, OnInit } from '@angular/core';
import { ListItem, ModalService } from 'carbon-components-angular';
import { UtilsService } from 'src/app/services/utils.service';
import { CorrelativesModalWindowComponent } from '../correlatives-modal-window/correlatives-modal-window.component';
import {
  INGENIERIA_DE_SISTEMAS_NAME,
  ISubject,
  TUDAI_NAME,
} from '../interfaces';
import { SubjectsThatObstructModalWindowComponent } from '../subjects-that-obstruct-modal-window/subjects-that-obstruct-modal-window.component';

@Component({
  selector: 'app-catedra',
  templateUrl: './catedra.component.html',
  styleUrls: ['./catedra.component.scss'],
})
export class CatedraComponent implements OnInit {
  @Input() public subject: ISubject;
  @Input() public allSubjects: ISubject[];

  public isOpenCorrelativesModalWindow: boolean = false;

  public ingenieriaDeSistemasName: string = INGENIERIA_DE_SISTEMAS_NAME;
  public tudaiName: string = TUDAI_NAME;

  public subjectStatus: ListItem[] = [];

  private subjectStatusAprobadaConFinal: ListItem = {
    content: 'Aprobada con final',
    value: 'aprobada_con_final',
    selected: false,
  };

  private subjectStatusAprobadaLaCursada: ListItem = {
    content: 'Aprobada la cursada',
    value: 'aprobada_la_cursada',
    selected: false,
  };

  private subjectStatusDesaprobada: ListItem = {
    content: 'Desaprobada',
    value: 'desaprobada',
    selected: false,
  };

  private subjectStatusSinCursar: ListItem = {
    content: 'Sin cursar',
    value: 'sin_cursar',
    selected: false,
  };

  constructor(
    private modalService: ModalService,
    private utilsService: UtilsService
  ) {}

  public ngOnInit(): void {
    switch (this.subject.status) {
      case 'aprobada_con_final':
        this.subjectStatusAprobadaConFinal.selected = true;
        break;
      case 'aprobada_la_cursada':
        this.subjectStatusAprobadaLaCursada.selected = true;
        break;
      case 'desaprobada':
        this.subjectStatusDesaprobada.selected = true;
        break;
      default:
        this.subjectStatusSinCursar.selected = true;
    }

    this.subjectStatus = [
      this.subjectStatusAprobadaConFinal,
      this.subjectStatusAprobadaLaCursada,
      this.subjectStatusDesaprobada,
      this.subjectStatusSinCursar,
    ];
  }

  public openLinkNewTab(link: string): void {
    if (link) {
      window.open(link, '_blank');
    }
  }

  public navigateTo(route: string): void {
    this.utilsService.navigateTo(route);
  }

  public onSelectedStatusChange(selectedStatus: any): void {
    localStorage.setItem(this.subject.id, selectedStatus.item.value);
    this.subject.status = localStorage.getItem(this.subject.id);
  }

  public showCorrelativesModalWindow(): void {
    this.modalService.create({
      component: CorrelativesModalWindowComponent,
      inputs: {
        correlatives: this.subject.correlatives,
      },
    });
  }

  public showSubjectsThatObstructModalWindow(): void {
    this.modalService.create({
      component: SubjectsThatObstructModalWindowComponent,
      inputs: {
        subjectToEvaluate: this.subject,
        allSubjects: this.allSubjects,
      },
    });
  }
}
