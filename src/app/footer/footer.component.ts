import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private utilsService: UtilsService) {}

  public ngOnInit(): void {}

  public openLinkNewTab(link: string): void {
    window.open(link, '_blank');
  }

  public navigateTo(route: string): void {
    this.utilsService.navigateTo(route);
  }
}
