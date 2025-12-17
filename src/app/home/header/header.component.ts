import { Component, OnDestroy, NgZone } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent implements OnDestroy {
  slides = ['build', 'upgrade', 'opensource', 'cloudless'];
  selectedIndex = 0;
  private destroy$ = new Subject<void>();
  private autoSlideStarted = false;

  constructor() {}

  startAutoSlide() {
    if (!this.autoSlideStarted) {
      this.autoSlideStarted = true;
      interval(5000)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.selectedIndex = (this.selectedIndex + 1) % this.slides.length;
        });
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  imageLoaded(event: Event) {
    // we need to start auto sliding here, otherwise the development server has a timeout issue
    this.startAutoSlide();
  }
}
