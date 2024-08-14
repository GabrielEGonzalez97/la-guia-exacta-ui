import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterState,
} from '@angular/router';
import { UtilsService } from './services/utils.service';

declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ingenieria-sistemas-app';

  public isBannerVisible: boolean = true;

  constructor(
    private utilsService: UtilsService,
    public router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitle(
          this.router.routerState,
          this.router.routerState.root
        ).join('-');
        gtag('event', 'page_view', {
          page_title: title,
          page_path: event.urlAfterRedirects,
          page_location: this.document.location.href,
        });
      }
    });
  }

  private getTitle(state: RouterState, parent: ActivatedRoute): string[] {
    const data = [];
    const subjectFolderName: string =
      parent.snapshot.paramMap.get('subjectName');
    if (parent && parent.snapshot.data && parent.snapshot.data['title']) {
      let title: string = parent.snapshot.data['title'];
      if (subjectFolderName) {
        title = title + '-' + subjectFolderName;
      }
      data.push(title);
    }
    if (state && parent && parent.firstChild) {
      data.push(...this.getTitle(state, parent.firstChild));
    }
    return data;
  }

  public openLinkNewTab(link: string): void {
    this.utilsService.openLinkNewTab(link);
  }

  public closeBanner(): void {
    this.isBannerVisible = false;
  }
}
