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
        {image: 'assets/logo/raspberry_pi.png', url: 'https://www.raspberrypi.org', text: 'Raspberry Pi'},
      ]
    },
    {
      name: 'Backend',
      items: [
        {image: 'assets/logo/python.svg', url: 'https://www.python.org', text: 'Python'},
        {image: 'assets/logo/postgresql.svg', url: 'https://www.postgresql.org/', text: 'PostgreSQL'},
        {image: 'assets/logo/nginx.svg', url: 'https://nginx.org/', text: 'Nginx'},
        {image: 'assets/logo/mqtt.png', url: 'https://mqtt.org/', text: 'MQTT'},
      ]
    },
    {
      name: 'arpi.features.stack.connection',
      items: [
        {image: 'assets/logo/letsencrypt.svg', url: 'https://letsencrypt.org/', text: 'Let\'s Encrypt'},
        {image: 'assets/logo/socketio.svg', url: 'https://socket.io/', text: 'Socket.IO'},
      ]
    },
    {
      name: 'Frontend',
      items: [
        {image: 'assets/logo/angular.svg', url: 'https://angular.io/', text: 'Angular'},
        {image: 'assets/logo/angular_material.svg', url: 'https://material.angular.io/', text: 'Angular Material'},
      ]
    },
    {
      name: 'arpi.features.stack.integration',
      items: [
        {image: 'assets/logo/homeassistant.png', url: 'https://www.home-assistant.io/', text: 'Home Assistant'},
        {image: 'assets/logo/domoticz.png', url: 'https://www.domoticz.com/', text: 'Domoticz'},
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
