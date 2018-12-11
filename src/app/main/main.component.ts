import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'arpi-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
