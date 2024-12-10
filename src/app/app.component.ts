import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { faGithub, faSlack } from '@fortawesome/free-brands-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {

  github = faGithub;
  slack = faSlack;
  faShareAlt = faShareAlt;
  
  language = 'EN';

  title = 'www';

  menuClosed = true;

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
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
}
