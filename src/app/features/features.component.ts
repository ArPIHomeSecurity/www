import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  technologies = [
    { name: 'arpi.features.stack.hardware', images: ['assets/raspberry_logo.svg'] },
    {
      name: 'Backend',
      images: ['assets/python_logo.svg', 'assets/postgresql_logo.svg', 'assets/nginx_logo.svg']
    },
    {
      name: 'arpi.features.stack.connection',
      images: ['assets/letsencrypt_logo.svg', 'assets/socketio_logo.svg']
    },
    { name: 'Frontend', images: ['assets/angular_logo.svg'] }
  ];

  features = [
    'channels',
    'outputs',
    'keyboard',
    'ups',
    'rtc',
    'gsm'
  ];

  constructor() {}

  ngOnInit() {}
}
