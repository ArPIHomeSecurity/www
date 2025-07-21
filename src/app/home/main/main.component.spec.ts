import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { ShareButtons } from 'ngx-sharebuttons/buttons';

import { MainComponent } from './main.component';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from '../about/about.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactComponent } from '../contact/contact.component';
import { VersionsComponent } from '../versions/versions.component';
import { ShareComponent } from '../share/share.component';
import { OrderComponent } from '../order/order.component';

// Import all the icons used in the components
import {
  faBell,
  faBolt,
  faClock,
  faCog,
  faGlobe,
  faHome,
  faLock,
  faMapMarked,
  faUsers,
  faCookie,
  faFileSignature,
  faShieldHalved,
  faExternalLinkAlt,
  faChevronDown,
  faDownload
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let translate: TranslateService;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        AboutComponent,
        ContactComponent,
        FooterComponent,
        MainComponent,
        ShareComponent,
        VersionsComponent,
        OrderComponent
      ],
      imports: [
        FontAwesomeModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
        LazyLoadImageModule,
        GalleryModule,
        ShareButtons
      ],
      providers: [
        TranslateService,
        provideHttpClient(withFetch())
      ]
    })
      .compileComponents();

    const library = TestBed.inject(FaIconLibrary);
    library.addIcons(faBell, faBolt, faClock, faCog, faGlobe, faHome, faLock, faMapMarked, faUsers, faCookie, faFileSignature, faShieldHalved, faGithub, faExternalLinkAlt, faChevronDown, faDownload);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
