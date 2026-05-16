import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //  Replace with actual authentication logic. These are demo-only placeholders.
  private dummyUser = {
    email: 'admin@example.com',
    password: 'password',
    token: 'auth-token',
  };

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  login(email: string, password: string): boolean {
    if (
      email === this.dummyUser.email &&
      password === this.dummyUser.password
    ) {
      if (isPlatformBrowser(this.platformId)) {
        sessionStorage.setItem('token', this.dummyUser.token);
      }
      return true;
    }
    return false;
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.removeItem('token');
    }
    this.router.navigate(['/auth/sign-in']);
  }

  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!sessionStorage.getItem('token');
    }
    return false;
  }
}
