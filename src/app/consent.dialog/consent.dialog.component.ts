import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

declare let gtag: (...args: any[]) => void;

@Component({
  selector: 'app-consent-dialog',
  templateUrl: './consent.dialog.component.html',
  styleUrls: ['./consent.dialog.component.scss'],
  standalone: false,
})
export class ConsentDialogComponent {
  @Output() onClosed = new EventEmitter<void>();

  constructor(public dialogRef: MatDialogRef<ConsentDialogComponent>) {}

  updateConsent(state: string) {
    // save the state into the local storage
    localStorage.setItem('google-analytics-consent', state);

    // update the consent in Google Analytics
    gtag('consent', 'update', {
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
      analytics_storage: state,
    });

    this.onClosed.emit();
  }
}
