import { Route } from '@angular/router';

export const ADMIN_ROUTES: Route[] = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard').then(
        (mod) => mod.Dashboard,
      ),
    data: { title: 'Dashboard' },
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./settings/settings').then(
        (mod) => mod.Settings,
      ),
    data: { title: 'Settings' },
  },
];
