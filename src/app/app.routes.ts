import { Routes } from '@angular/router';
import { DirectionComponent } from './portfolio-website/direction/direction.component';

export const routes: Routes = [
  {
    path: 'portfolio-website',
    loadChildren: () =>
      import('./portfolio-website/portfolio-website.module').then(
        (m) => m.PortfolioWebsiteModule
      ),
  },
  {
    path:'direction',
    component:DirectionComponent
  }
];
