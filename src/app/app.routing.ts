import { Routes, RouterModule  } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'car-tool', loadChildren: 'app/car-tool/car-tool.module#CarToolModule' },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

export const AppRouterModule = RouterModule.forRoot(routes, { useHash: true });
