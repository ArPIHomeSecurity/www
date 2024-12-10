import { Component, OnInit } from '@angular/core';

import { Meta } from '@angular/platform-browser';


@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    standalone: false
})
export class MainComponent implements OnInit {

  constructor(
    private meta: Meta
  ) { }

  ngOnInit() {
    // close menu after click in mobile view
    this.meta.addTag({
      name: "description",
      content: "An easy to use Raspberry PI Zero based home security system to replace your old mainboard"
    });
  }
}
