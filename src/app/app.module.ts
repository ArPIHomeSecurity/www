import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ShareButtons } from 'ngx-sharebuttons/buttons';
import { provideShareButtonsOptions } from 'ngx-sharebuttons';
import { shareIcons } from 'ngx-sharebuttons/icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FeaturesComponent } from './home/features/features.component';
import { AboutComponent } from './home/about/about.component';
import { MainComponent } from './home/main/main.component';
import { FooterComponent } from './home/footer/footer.component';
import { ContactComponent } from './home/contact/contact.component';
import { OrderComponent } from './home/order/order.component';
import { ShareComponent } from './home/share/share.component';
import { VersionsComponent } from './home/versions/versions.component';

import 'mousetrap';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturesComponent,
    AboutComponent,
    MainComponent,
    FooterComponent,
    ContactComponent,
    OrderComponent,
    ShareComponent,
    VersionsComponent,
    PrivacyComponent,
    TermsComponent
  ],
  bootstrap: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    FontAwesomeModule,
    LazyLoadImageModule,
    GalleryModule,
    ShareButtons
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideClientHydration(withEventReplay()),
    provideShareButtonsOptions(
      shareIcons()
    )
  ]
})
export class AppModule { }
