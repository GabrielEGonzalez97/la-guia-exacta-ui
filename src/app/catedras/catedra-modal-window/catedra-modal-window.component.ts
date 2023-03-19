import { Component, Inject, OnInit } from '@angular/core';
import { BaseModal } from 'carbon-components-angular';
import { ISubject } from '../interfaces';

@Component({
  selector: 'app-catedra-modal-window',
  templateUrl: './catedra-modal-window.component.html',
  styleUrls: ['./catedra-modal-window.component.scss'],
})
export class CatedraModalWindowComponent extends BaseModal implements OnInit {
  constructor(
    @Inject('subject') public subject: ISubject,
    @Inject('allSubjects') public allSubjects: ISubject[]
  ) {
    super();
  }

  public ngOnInit(): void {}
}
