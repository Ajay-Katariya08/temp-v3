import { Route } from '@angular/router';

export const AUTH_ROUTES: Route[] = [
  {
    path: 'login',
    loadComponent: () => import('./login/login').then((mod) => mod.Login),
    data: { title: 'Login Your Account' },
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup').then((mod) => mod.Signup),
    data: { title: 'Create a new account' },
  },
  {
    path: 'forget-password',
    loadComponent: () =>
      import('./forget-password/forget-password').then((mod) => mod.ForgetPassword),
    data: { title: 'Forget Password' },
  },
  {
    path: 'confirm',
    loadComponent: () => import('./confirm/confirm').then((mod) => mod.Confirm),
    data: { title: 'Confirm Mail' },
  },
];
