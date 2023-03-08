import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TooltipPlacementOptions, TooltipTriggerOptions } from './interfaces';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
  @Input() public trigger: TooltipTriggerOptions;
  @Input() public placement: TooltipPlacementOptions;

  @Output() public pointerOverEmitter: EventEmitter<void> =
    new EventEmitter<void>();

  constructor() {}

  public ngOnInit(): void {}

  public onPointerOver(): void {
    this.pointerOverEmitter.emit();
  }
}
