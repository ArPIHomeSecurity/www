import { Component, EventEmitter, Output } from '@angular/core';

declare var gtag: (...args: any[]) => void;

@Component({
  selector: 'app-consent-dialog',
  templateUrl: './consent.dialog.component.html',
  styleUrl: './consent.dialog.component.scss',
  standalone: false
})
export class ConsentDialogComponent {
  @Output() onClosed = new EventEmitter<void>();

  updateConsent(state: string) {
    // save the state into the local storage
    localStorage.setItem('google-analytics-consent', state);

    // update the consent in Google Analytics
    gtag('consent', 'update', {
      'ad_storage': state,
      'ad_user_data': state,
      'ad_personalization': state,
      'analytics_storage': state,
    });

    this.onClosed.emit();
  }
}
