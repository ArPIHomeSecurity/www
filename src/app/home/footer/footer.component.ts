import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCookie, faFileSignature, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { ConsentDialogComponent } from '../../consent.dialog/consent.dialog.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: false,
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear();
  github = faGithub;
  faPrivacy = faShieldHalved;
  faTerms = faFileSignature;
  faCookie = faCookie;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  openConsentDialog(): void {
    const dialogRef = this.dialog.open(ConsentDialogComponent, {
      width: '400px',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.onConsentDialogClosed();
    });
  }

  onConsentDialogClosed() {
    // const consentLink = document.getElementById("consent-link");
    // if (consentLink) {
    //   consentLink.classList.add("active");
    // }
    // // this.button.nativeElement.classList.add("active");
    // setTimeout(() => {
    //   // this.button.nativeElement.classList.remove("active");
    //   if (consentLink) {
    //     consentLink.classList.remove("active");
    //   }
    // }, 4000);
  }
}
