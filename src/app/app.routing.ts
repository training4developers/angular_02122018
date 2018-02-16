import { Routes, RouterModule } from '@angular/router';

import { AppHomeComponent } from './components/app-home/app-home.component';
import { AppPagenotfoundComponent } from './components/app-pagenotfound/app-pagenotfound.component';
import { AppAboutComponent } from './components/app-about/app-about.component';
import { AppContactComponent } from './components/app-contact/app-contact.component';

const routes: Routes = [
  // http://localhost:4200/home
  { path: 'home', component: AppHomeComponent },
  // http://localhost:4200/about
  { path: 'about/:id', component: AppAboutComponent },
  // http://localhost:4200/contact
  { path: 'contact', component: AppContactComponent },
  // http://localhost:4200
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  // nothing matches
  { path: '**', component: AppPagenotfoundComponent },
];

export const AppRouterModule = RouterModule.forRoot(routes);
