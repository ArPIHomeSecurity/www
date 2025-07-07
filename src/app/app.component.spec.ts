import { TestBed, waitForAsync, ComponentFixture } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { ConsentDialogComponent } from './consent.dialog/consent.dialog.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ShareComponent } from './home/share/share.component';
import { FooterComponent } from './home/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ShareButtons } from 'ngx-sharebuttons/buttons';

// Import icons used in child components
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCookie, faFileSignature, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

describe('AppComponent', () => {
  let translate: TranslateService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ConsentDialogComponent,
        ShareComponent,
        FooterComponent
      ],
      imports: [
        AppRoutingModule,
        FontAwesomeModule,
        ShareButtons,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      providers: [
        TranslateService,
        provideHttpClient(withFetch()),
        provideRouter([])
      ]
    }).compileComponents();

    const library = TestBed.inject(FaIconLibrary);
    library.addIcons(faGithub, faCookie, faFileSignature, faShieldHalved);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
