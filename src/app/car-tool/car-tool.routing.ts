import { Routes, RouterModule } from '@angular/router';

import { CarHomePageComponent } from './components/car-home-page/car-home-page.component';
import { CarNewPageComponent } from './components/car-new-page/car-new-page.component';


const routes: Routes = [
  { path: 'home', component: CarHomePageComponent },
  { path: 'new', component: CarNewPageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

export const CarToolRouterModule = RouterModule.forChild(routes);
