import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-descripcion-carrera-template',
  templateUrl: './descripcion-carrera-template.component.html',
  styleUrls: ['./descripcion-carrera-template.component.scss'],
})
export class DescripcionCarreraTemplateComponent implements OnInit {
  @Input() public sectionTitle: string;
  @Input() public isSectionTileVisible: boolean;

  @Output() public tileClickEmitter: EventEmitter<void> =
    new EventEmitter<void>();

  constructor() {}

  public ngOnInit(): void {}

  public onTileClick(): void {
    this.tileClickEmitter.emit();
  }
}
