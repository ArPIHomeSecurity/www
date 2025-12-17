import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { importProvidersFrom, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
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
import { UserInterfaceComponent } from './home/features/user-interface/user-interface.component';
import { FeatureListComponent } from './home/features/featurelist/featurelist.component';
import { BoardComponent } from './home/features/board/board.component';
import { TechnologiesComponent } from './home/features/technologies/technologies.component';
import { AboutComponent } from './home/about/about.component';
import { MainComponent } from './home/main/main.component';
import { FooterComponent } from './home/footer/footer.component';
import { ContactComponent } from './home/contact/contact.component';
import { OrderComponent } from './home/order/order.component';
import { ShareComponent } from './share/share.component';
import { VersionsComponent } from './home/versions/versions.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { ConsentDialogComponent } from './consent.dialog/consent.dialog.component';
import { DocumentationComponent } from './home/documentation/documentation.component';
import { NewsComponent } from './news/news.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeatureListComponent,
    UserInterfaceComponent,
    BoardComponent,
    TechnologiesComponent,
    AboutComponent,
    MainComponent,
    FooterComponent,
    ContactComponent,
    OrderComponent,
    ShareComponent,
    VersionsComponent,
    PrivacyComponent,
    TermsComponent,
    ConsentDialogComponent,
    DocumentationComponent,
    NewsComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    LazyLoadImageModule,
    GalleryModule,
    ShareButtons,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    provideHttpClient(withFetch()),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      }),
    ),
    provideClientHydration(withEventReplay()),
    provideShareButtonsOptions(shareIcons()),
  ],
})
export class AppModule {}
