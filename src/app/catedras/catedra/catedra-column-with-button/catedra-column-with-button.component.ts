import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-catedra-column-with-button',
  templateUrl: './catedra-column-with-button.component.html',
  styleUrls: ['./catedra-column-with-button.component.scss'],
})
export class CatedraColumnWithButtonComponent implements OnInit {
  @Input() public elementIconImagePath: string;
  @Input() public elementName: string;

  @Output() onButtonClickEmitter: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  public ngOnInit(): void {}

  public onButtonClick(): void {
    this.onButtonClickEmitter.emit();
  }
}
