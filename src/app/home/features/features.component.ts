import { Component, OnInit } from '@angular/core';
import { faBell, faBolt, faClock, faCog, faGlobe, faLock, faMapMarked, faUsers } from '@fortawesome/free-solid-svg-icons';
import { ButtonsStrategy, DescriptionStrategy, Image, LineLayout, ModalGalleryRef, ModalGalleryService, ModalLibConfig, PlainGalleryStrategy, PlainLibConfig } from '@ks89/angular-modal-gallery';

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss'],
    standalone: false
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
    {
      id: 11,
      title: 'channels',
      text: 'input channels for sensors',
      properties: ['silent', 'sensitivity']},
    {
      id: 12,
      title: 'outputs',
      text: 'output channels for actuators',
      properties: ['state', 'button']},
    {
      id: 13,
      title: 'keypad',
      text: 'keypad for physical access',
      properties: ['disarm']
    },
    {
      id: 14,
      title: 'gsm',
      text: 'gsm module for sms notifications and calls',
      properties: ['notifications','sms']
    },
    {
      id: 15,
      title: 'ups',
      text: 'uninterruptible power supply',
      properties: []
    },
    {
      id :16,
      title: 'rtc',
      text: 'real-time clock',
      properties: []
    },
  ];

  generalFeatures = [
    {
      icon: faLock,
      title: 'arpi.features.general.secureaccess.title',
      description: 'arpi.features.general.secureaccess.description'
    },
    {
      icon: faUsers,
      title: 'arpi.features.general.users.title',
      description: 'arpi.features.general.users.description'
    },
    {
      icon: faMapMarked,
      title: 'arpi.features.general.locations.title',
      description: 'arpi.features.general.locations.description'
    },
    {
      icon: faCog,
      title: 'arpi.features.general.programmable.title',
      description: 'arpi.features.general.programmable.description'
    },
    {
      icon: faGlobe,
      title: 'arpi.features.general.remoteaccess.title',
      description: 'arpi.features.general.remoteaccess.description'
    },
    {
      icon: faBell,
      title: 'arpi.features.general.notifications.title',
      description: 'arpi.features.general.notifications.description'
    },
    {
      icon: faBolt,
      title: 'arpi.features.general.poweroutage.title',
      description: 'arpi.features.general.poweroutage.description'
    },
    {
      icon: faClock,
      title: 'arpi.features.general.delayedalert.title',
      description: 'arpi.features.general.delayedalert.description'
    }
  ];

  galleryConfig: PlainLibConfig = {
    plainGalleryConfig: {
      strategy: PlainGalleryStrategy.ROW,
      layout: new LineLayout(
        {width:'100%', height: 'auto'},
        {length: 1, wrap: true},
        ''
      )
    }
  };

  constructor(
    private modalGalleryService: ModalGalleryService
  ) {}

  ngOnInit() {}

  getImages(title: string) {
    return [new Image(0, {
      img: 'assets/arpi_board_' + title + '.png'
    })];
  }

  onShow(id: number, index: number, title: string): void {
    const images: Image[] = this.getImages(title);

    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images,
      currentImage: images[index],
      libConfig: {
        currentImageConfig: {
          description: {
            strategy: DescriptionStrategy.ALWAYS_HIDDEN
          }
        },
        previewConfig: {
          visible: false
        },
        dotsConfig: {
          visible: false
        },
        slideConfig: {
          infinite: false,
          sidePreviews: {
            show: false
          }
        },
        buttonsConfig: {
          visible: false,
          strategy: ButtonsStrategy.DEFAULT
        }
      } as ModalLibConfig
    }) as ModalGalleryRef;
  }
}
