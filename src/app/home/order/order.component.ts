import { Component, OnInit } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss'],
    standalone: false
})
export class OrderComponent implements OnInit {

  faLink = faExternalLinkAlt

  constructor() { }

  ngOnInit() {
  }

}
