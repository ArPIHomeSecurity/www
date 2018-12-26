import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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

  }

  ngAfterViewInit() {

  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.language = language.toUpperCase();
  }
}
