import { Routes } from '@angular/router';
import { LandingLayout } from './layout/landing-layout/landing-layout';
import { AdminLayout } from './layout/admin-layout/admin-layout';
import { PagesLayout } from './layout/pages-layout/pages-layout';
import { Contact } from './contact/contact';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((mod) => mod.Home),
    data: {
      title: 'Premium Landing Pages',
    },
  },
  {
    path: 'home',
    component: LandingLayout,
    loadChildren: () => import('./landing/landing.route').then((mod) => mod.LANDING_ROUTES),
  },
  {
    path: 'account',
    component: AdminLayout,
    loadChildren: () => import('./admin/admin.route').then((mod) => mod.ADMIN_ROUTES),
  },
  {
    path: '',
    component: PagesLayout,
    loadChildren: () => import('./pages/pages.route').then((mod) => mod.PAGES_ROUTES),
  },
  {
    path: '',
    loadChildren: () => import('./pages/blog/blog.route').then((mod) => mod.BLOG_ROUTES),
  },
  {
    path: 'account',
    loadChildren: () => import('./auth/auth.route').then((mod) => mod.AUTH_ROUTES),
  },
  {
    path: 'contact',
    component: Contact,
    data: { title: 'Contact Us' },
  },
];
