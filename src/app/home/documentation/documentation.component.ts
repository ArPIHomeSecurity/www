import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUser, faShieldAlt, faCode, faLightbulb, faMicrochip } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
  standalone: false
})
export class DocumentationComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faUser, faShieldAlt, faCode, faLightbulb, faMicrochip);
  }
}
