import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {

  language = 'EN';
  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
    $('a.nav-link, .dropdown-item').on('click', function(){
      if ($('.navbar-toggler').is(":visible")) {
        $('.navbar-toggler').click();
      }
    });
  }

  ngAfterViewInit() {

  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.language = language.toUpperCase();
  }
}
