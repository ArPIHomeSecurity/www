import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { SettingsModule } from './settings';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    // Bootstrap
    NgbModule,

    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core & shared
    CoreModule,
    SharedModule,

    // features
    SettingsModule,

    // app
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FeaturesComponent,
    AboutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
