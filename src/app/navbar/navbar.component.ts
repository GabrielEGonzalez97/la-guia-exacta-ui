import { Component, ElementRef, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private utilsService: UtilsService) {}

  public ngOnInit(): void {}

  public navigateTo(route: string): void {
    this.utilsService.navigateTo(route);
  }
}
