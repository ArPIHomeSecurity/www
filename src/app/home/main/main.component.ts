import { Component, OnInit, AfterViewInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { Meta } from '@angular/platform-browser';
import { faGithub, faSlack } from '@fortawesome/free-brands-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

import * as $ from 'jquery';
import { ScrollSpyService } from 'ng-spy';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {

  language = 'EN';
  github = faGithub;
  slack = faSlack;
  faShareAlt = faShareAlt;

  constructor(
    private spyService: ScrollSpyService,
    private translate: TranslateService,
    private meta: Meta
  ) { }

  ngOnInit() {
    // close menu after click in mobile view
    this.meta.addTag({
      name: "description",
      content: "An easy to use Raspberry PI Zero based home security system to replace your old mainboard"
    });
    $('a.nav-link, .dropdown-item').on('click', function () {
      if ($('.navbar-toggler').is(":visible")) {
        $('.navbar-toggler').click();
      }
    });
  }

  ngAfterViewInit() {
    this.spyService.spy({ thresholdBottom: 50 });
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.language = language.toUpperCase();
  }
}
