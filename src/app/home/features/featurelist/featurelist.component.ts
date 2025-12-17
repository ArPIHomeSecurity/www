import { Component, OnInit } from '@angular/core';
import {
  faLock,
  faUsers,
  faMapMarked,
  faCog,
  faGlobe,
  faBell,
  faBolt,
  faClock,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-featurelist',
  templateUrl: './featurelist.component.html',
  styleUrls: ['./featurelist.component.scss'],
  standalone: false,
})
export class FeatureListComponent implements OnInit {
  generalFeatures = [
    {
      icon: 'lock',
      color: 'primary',
      title: 'arpi.features.general.secureaccess.title',
      description: 'arpi.features.general.secureaccess.description',
    },
    {
      icon: 'group',
      color: 'accent',
      title: 'arpi.features.general.users.title',
      description: 'arpi.features.general.users.description',
    },
    {
      icon: 'place',
      color: 'warn',
      title: 'arpi.features.general.locations.title',
      description: 'arpi.features.general.locations.description',
    },
    {
      icon: 'settings',
      color: 'primary',
      title: 'arpi.features.general.programmable.title',
      description: 'arpi.features.general.programmable.description',
    },
    {
      icon: 'public',
      color: 'accent',
      title: 'arpi.features.general.remoteaccess.title',
      description: 'arpi.features.general.remoteaccess.description',
    },
    {
      icon: 'notifications',
      color: 'warn',
      title: 'arpi.features.general.notifications.title',
      description: 'arpi.features.general.notifications.description',
    },
    {
      icon: 'bolt',
      color: 'primary',
      title: 'arpi.features.general.poweroutage.title',
      description: 'arpi.features.general.poweroutage.description',
    },
    {
      icon: 'schedule',
      color: 'accent',
      title: 'arpi.features.general.delayedalert.title',
      description: 'arpi.features.general.delayedalert.description',
    },
    {
      icon: 'home',
      color: 'primary',
      title: 'arpi.features.general.homeautomation.title',
      description: 'arpi.features.general.homeautomation.description',
    },
  ];
  ngOnInit() {}
}
