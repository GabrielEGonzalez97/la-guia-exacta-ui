import { Component, OnInit } from '@angular/core';
import { PAGE_SECTIONS } from '../common/constants';
import { IPageSection } from '../common/interfaces';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public pageSections: IPageSection[] = PAGE_SECTIONS;

  constructor(private utilsService: UtilsService) {}

  public ngOnInit(): void {}

  public navigateTo(route: string): void {
    this.utilsService.navigateTo(route);
  }
}
