import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { FeaturesComponent } from './features.component';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faBell,
  faBolt,
  faClock,
  faCog,
  faGlobe,
  faHome,
  faLock,
  faMapMarked,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

describe('FeaturesComponent', () => {
  let component: FeaturesComponent;
  let fixture: ComponentFixture<FeaturesComponent>;
  let translate: TranslateService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturesComponent],
      imports: [
        FontAwesomeModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
        GalleryModule,
        LazyLoadImageModule],
      providers: [
        TranslateService,
        provideHttpClient(withFetch())
      ]
    })
      .compileComponents();

    const library = TestBed.inject(FaIconLibrary);
    library.addIcons(faBell, faBolt, faClock, faCog, faGlobe, faHome, faLock, faMapMarked, faUsers);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
