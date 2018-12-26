<<<<<<< HEAD
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'arpi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
=======
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
>>>>>>> refs/heads/master
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
