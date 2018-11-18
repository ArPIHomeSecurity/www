import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    data: { title: 'arpi.menu.main' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'arpi.menu.about' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'arpi.menu.about' }
  },
  {
    path: 'features',
    component: FeaturesComponent,
    data: { title: 'arpi.menu.features' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule {}
