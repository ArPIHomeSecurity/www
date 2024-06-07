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
        {image: 'assets/logo/raspberry_pi.png', url: 'https://www.raspberry.org'}
      ]
    },
    {
      name: 'Backend',
      items: [
        {image: 'assets/logo/python.svg', url: 'https://www.python.org'},
        {image: 'assets/logo/postgresql.svg', url: 'https://www.postgresql.org/'},
        {image: 'assets/logo/nginx.svg', url: 'https://nginx.org/'},
        {image: 'assets/logo/mqtt.png', url: 'https://mqtt.org/'}
      ]
    },
    {
      name: 'arpi.features.stack.connection',
      items: [
        {image: 'assets/logo/letsencrypt.svg', url: 'https://letsencrypt.org/'},
        {image: 'assets/logo/socketio.svg', url: 'https://socket.io/'}
      ]
    },
    {
      name: 'Frontend',
      items: [
        {image: 'assets/logo/angular.svg', url: 'https://angular.io/'},
        {image: 'assets/logo/angular_material.svg', url: 'https://material.angular.io/'}
      ]
    },
    {
      name: 'arpi.features.stack.integration',
      items: [
        {image: 'assets/logo/homeassistant.png', url: 'https://www.home-assistant.io/'},
        {image: 'assets/logo/domoticz.png', url: 'https://www.domoticz.com/'}
      ]
    },
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
