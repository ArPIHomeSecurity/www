import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  slides = ['build', 'upgrade', 'opensource'];
  displayPlaceholder = true;

  constructor() { }

  ngOnInit() {
  }

  imageLoaded(event) {
    console.log('LOADED: ', event);
    this.displayPlaceholder = false;
  }
}
