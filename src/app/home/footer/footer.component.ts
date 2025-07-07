import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCookie, faFileSignature, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: false
})
export class FooterComponent implements OnInit {

  year = new Date().getFullYear();
  github = faGithub;
  faPrivacy = faShieldHalved;
  faTerms = faFileSignature;
  faCookie = faCookie;

  constructor() { }

  ngOnInit() {
  }

}
