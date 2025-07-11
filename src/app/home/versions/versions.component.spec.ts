import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { GalleryModule } from '@ks89/angular-modal-gallery';

import { VersionsComponent } from './versions.component';
import { faChevronDown, faDownload } from '@fortawesome/free-solid-svg-icons';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

describe('VersionsComponent', () => {
  let component: VersionsComponent;
  let fixture: ComponentFixture<VersionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [VersionsComponent],
      imports: [TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }),
      GalleryModule,
      FontAwesomeModule],
      providers: [
        TranslateService,
        provideHttpClient(withFetch())
      ]
    })
      .compileComponents();

    const library = TestBed.inject(FaIconLibrary);
    library.addIcons(faChevronDown, faDownload);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
