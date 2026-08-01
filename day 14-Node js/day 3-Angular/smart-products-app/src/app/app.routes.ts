import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'smart-products',
    pathMatch: 'full'
  },
  {
    path: 'smart-products',
    loadComponent: () =>
      import('./smart-products/smart-products')
        .then(m => m.SmartProducts)
  }
];