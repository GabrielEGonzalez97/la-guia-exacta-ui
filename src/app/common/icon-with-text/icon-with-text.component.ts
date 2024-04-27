import { Component, Input, OnInit } from '@angular/core';
import { IIconWithText } from './interfaces';

@Component({
  selector: 'app-icon-with-text',
  templateUrl: './icon-with-text.component.html',
  styleUrls: ['./icon-with-text.component.scss'],
})
export class IconWithTextComponent implements OnInit {
  @Input() public iconWithText: IIconWithText;

  constructor() {}

  public ngOnInit(): void {}
}
