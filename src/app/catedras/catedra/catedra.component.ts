import { Component, Input, OnInit } from '@angular/core';
import { ListItem, ModalService } from 'carbon-components-angular';
import { CorrelativesModalWindowComponent } from '../correlatives-modal-window/correlatives-modal-window.component';
import { ISubject } from '../interfaces';

@Component({
  selector: 'app-catedra',
  templateUrl: './catedra.component.html',
  styleUrls: ['./catedra.component.scss'],
})
export class CatedraComponent implements OnInit {
  @Input() public subject: ISubject;

  public isOpenCorrelativesModalWindow: boolean = false;

  public subjectStatus: ListItem[] = [
    {
      content: 'Aprobada',
      value: 'Aprobada',
      selected: true,
    },
    {
      content: 'Desaprobada',
      value: 'Desaprobada',
      selected: false,
    },
  ];

  constructor(private modalService: ModalService) {}

  public ngOnInit(): void {}

  public openLinkNewTab(link: string): void {
    if (link) {
      window.open(link, '_blank');
    }
  }

  public onSelectedStatusChange(selectedStatus: any): void {
    localStorage.setItem(this.subject.id, selectedStatus.item.content);
    this.subject.teacher = selectedStatus.item.content;
  }

  public showCorrelativesModalWindow(): void {
    this.modalService.create({
      component: CorrelativesModalWindowComponent,
      inputs: {
        correlatives: this.subject.correlatives,
      },
    });
  }
}
