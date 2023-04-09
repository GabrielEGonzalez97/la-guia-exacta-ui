import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss'],
})
export class FlipCardComponent implements OnInit {
  @Input() public cardName: string = '';
  @Input() public navigateToPath: string = '';
  @Input() public cardFrontImagePath: string = '';
  @Input() public cardBackImagePath: string = '';

  constructor(private utilsService: UtilsService) {}

  public ngOnInit(): void {}

  public navigateTo(route: string): void {
    this.utilsService.navigateTo(route);
  }
}
