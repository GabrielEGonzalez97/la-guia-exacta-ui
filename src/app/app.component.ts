import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ingenieria-sistemas-app';

  constructor(public router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-QD8PY9PFZ8', {
          page_path: event.urlAfterRedirects,
        });
      }
    });
  }
}
