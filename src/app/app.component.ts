import { AfterViewInit, Component, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

import { faGithub, faSlack } from '@fortawesome/free-brands-svg-icons';
import {
  faCookie,
  faFileSignature,
  faShareAlt,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';

import { ConsentDialogComponent } from './consent.dialog/consent.dialog.component';
import { ShareComponent } from './share/share.component';

declare let bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('consentButton') button!: ElementRef;

  faPrivacy = faShieldHalved;
  faTerms = faFileSignature;
  github = faGithub;
  slack = faSlack;
  faShareAlt = faShareAlt;
  faCookie = faCookie;

  language = 'EN';
  title = 'www';

  isDesktop = true;
  private breakpointSubscription: any;

  constructor(
    private translate: TranslateService,
    private dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');

    this.breakpointSubscription = this.breakpointObserver
      .observe(['(min-width: 1100px)'])
      .subscribe(result => {
        this.isDesktop = result.matches;
      });
  }
  ngOnDestroy() {
    if (this.breakpointSubscription) {
      this.breakpointSubscription.unsubscribe();
    }
  }

  openConsentDialog(): void {
    const dialogRef = this.dialog.open(ConsentDialogComponent, {
      width: '400px',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.onConsentDialogClosed();
    });
  }

  openShareDialog(): void {
    const dialogRef = this.dialog.open(ShareComponent, {
      width: '400px',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.onConsentDialogClosed();
    });
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
