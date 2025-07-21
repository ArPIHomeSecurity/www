import { Component, OnInit } from '@angular/core';
import { faLock, faUsers, faMapMarked, faCog, faGlobe, faBell, faBolt, faClock, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-featurelist',
  templateUrl: './featurelist.component.html',
  styleUrls: ['./featurelist.component.scss'],
  standalone: false
})
export class FeatureListComponent implements OnInit {
  generalFeatures = [
    { icon: faLock, title: 'arpi.features.general.secureaccess.title', description: 'arpi.features.general.secureaccess.description' },
    { icon: faUsers, title: 'arpi.features.general.users.title', description: 'arpi.features.general.users.description' },
    { icon: faMapMarked, title: 'arpi.features.general.locations.title', description: 'arpi.features.general.locations.description' },
    { icon: faCog, title: 'arpi.features.general.programmable.title', description: 'arpi.features.general.programmable.description' },
    { icon: faGlobe, title: 'arpi.features.general.remoteaccess.title', description: 'arpi.features.general.remoteaccess.description' },
    { icon: faBell, title: 'arpi.features.general.notifications.title', description: 'arpi.features.general.notifications.description' },
    { icon: faBolt, title: 'arpi.features.general.poweroutage.title', description: 'arpi.features.general.poweroutage.description' },
    { icon: faClock, title: 'arpi.features.general.delayedalert.title', description: 'arpi.features.general.delayedalert.description' },
    { icon: faHome, title: 'arpi.features.general.homeautomation.title', description: 'arpi.features.general.homeautomation.description' }
  ];
  ngOnInit() {}
}
