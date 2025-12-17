import { Component } from '@angular/core';
import { interval, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.scss'],
  standalone: false,
})
export class UserInterfaceComponent {
  tabs = [
    {
      img: 'assets/screenshot-home-01.png',
      alt: 'ArPI home security system dashboard - real-time monitoring interface',
      loaded: false,
    },
    {
      img: 'assets/screenshot-home-02.png',
      alt: 'ArPI security system home screen - status overview and controls',
      loaded: false,
    },
    {
      img: 'assets/screenshot-sensor-01.png',
      alt: 'ArPI sensor management interface - configure and monitor security sensors',
      loaded: false,
    },
    {
      img: 'assets/screenshot-zone-01.png',
      alt: 'ArPI zone configuration - security zones and area management',
      loaded: false,
    },
    {
      img: 'assets/screenshot-menu-01.png',
      alt: 'ArPI navigation menu - system settings and configuration options',
      loaded: false,
    },
    {
      img: 'assets/screenshot-area-01.png',
      alt: 'ArPI area management - security area configuration and monitoring',
      loaded: false,
    },
  ];
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
          const nextIndex = (this.selectedIndex + 1) % this.tabs.length;

          // Preload next image and wait for it to load before switching
          const nextImgObj = this.tabs[nextIndex];
          if (!nextImgObj.loaded) {
            const nextImg = new Image();
            nextImg.src = nextImgObj.img;
            nextImg.onload = () => {
              nextImgObj.loaded = true;
              // get index of nextImgObj in tabs array
              this.selectedIndex = this.tabs.indexOf(nextImgObj);
            };
          } else {
            this.selectedIndex = nextIndex;
          }
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
