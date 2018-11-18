import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '@app/shared';

import { StaticRoutingModule } from './static-routing.module';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [SharedModule, StaticRoutingModule, NgbModule],
  declarations: [AboutComponent, FeaturesComponent, HomeComponent, MainComponent]
})
export class StaticModule {}
