import { Component, ElementRef, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    '(document:click)': 'onClickOutsideRightPanel($event)',
  },
})
export class NavbarComponent implements OnInit {
  public isRightPanelVisible: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private utilsService: UtilsService
  ) {}

  public ngOnInit(): void {}

  public updateRightPanelVisibility() {
    this.isRightPanelVisible = !this.isRightPanelVisible;
  }

  public navigateTo(route: string): void {
    this.utilsService.navigateTo(route);
  }

  public onClickOutsideRightPanel(event: any): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isRightPanelVisible = false;
    }
  }
}
