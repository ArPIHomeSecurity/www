import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  slides = ['build', 'upgrade', 'opensource', 'cloudless'];
  displayPlaceholder = true;

  constructor() { }

  ngOnInit() {
  }

  imageLoaded(event) {
    this.displayPlaceholder = false;
  }
}
