import { Component, OnInit } from '@angular/core';
import { BaseModal } from 'carbon-components-angular';

@Component({
  selector: 'app-instructions-modal-window',
  templateUrl: './instructions-modal-window.component.html',
  styleUrls: ['./instructions-modal-window.component.scss'],
})
export class InstructionsModalWindowComponent
  extends BaseModal
  implements OnInit
{
  constructor() {
    super();
  }

  public ngOnInit(): void {}
}
