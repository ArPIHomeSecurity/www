import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { faGithub, faSlack } from '@fortawesome/free-brands-svg-icons';
import { faCookie, faShareAlt } from '@fortawesome/free-solid-svg-icons';

declare var bootstrap: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent implements AfterViewInit {
  @ViewChild('consentButton') button!: ElementRef;

  github = faGithub;
  slack = faSlack;
  faShareAlt = faShareAlt;
  faCookie = faCookie;

  language = 'EN';

  title = 'www';

  menuClosed = true;

  constructor(
    private translate: TranslateService
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  ngAfterViewInit() {
    // check localstorage in SSR
    if (typeof localStorage === 'undefined') {
      return;
    }

    if (localStorage.getItem('google-analytics-consent') === null) {
      // trigger the consent dialog
      setTimeout(() => {
        const consentDialogElement = document.getElementById('consentDialog');
        if (consentDialogElement) {
          const modal = new bootstrap.Modal(consentDialogElement);
          modal.show();
        }
      }, 2000);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.language = language.toUpperCase();
    this.menuClosed = true;
  }

  onMenuClicked() {
    this.menuClosed = !this.menuClosed;
  }

  onMenuClose() {
    this.menuClosed = true;
  }

  onConsentDialogClosed() {
    const consentLink = document.getElementById('consent-link');
    if (consentLink) {
      consentLink.classList.add('active');
    }
    this.button.nativeElement.classList.add('active');

    setTimeout(() => {
      this.button.nativeElement.classList.remove('active');
      if (consentLink) {
        consentLink.classList.remove('active');
      }
    }, 4000);
  }
}
