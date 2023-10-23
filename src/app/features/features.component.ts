import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  technologies = [
    {
      name: 'arpi.features.stack.hardware',
      items: [
        {image: 'assets/raspberry_pi_logo.png', url: 'https://www.raspberry.org'}
      ]
    },
    {
      name: 'Backend',
      items: [
        {image: 'assets/python_logo.svg', url: 'https://www.python.org'},
        {image: 'assets/postgresql_logo.svg', url: 'https://www.postgresql.org/'},
        {image: 'assets/nginx_logo.svg', url: 'https://nginx.org/'}
      ]
    },
    {
      name: 'arpi.features.stack.connection',
      items: [
        {image: 'assets/letsencrypt_logo.svg', url: 'https://letsencrypt.org/'},
        {image: 'assets/socketio_logo.svg', url: 'https://socket.io/'}
      ]
    },
    {
      name: 'Frontend',
      items: [
        {image: 'assets/angular_logo.svg', url: 'https://angular.io/'},
        {image: 'assets/angular_material_logo.svg', url: 'https://material.angular.io/'}
      ]
    }
  ];

  features = [
    'channels',
    'outputs',
    'keypad',
    'ups',
    'rtc',
    'gsm'
  ];

  constructor() {}

  ngOnInit() {}
}
