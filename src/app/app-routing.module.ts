import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { SettingsContainerComponent } from './settings';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'settings',
    component: SettingsContainerComponent,
    data: { title: 'arpi.menu.settings' }
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
