import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './home/main/main.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: '**',
    redirectTo: '/'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
