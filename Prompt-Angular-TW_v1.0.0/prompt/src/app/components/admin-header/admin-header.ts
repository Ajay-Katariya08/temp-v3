import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { adminNavData, mobileMenuData, notificationData, profileData } from './data';

@Component({
  selector: 'app-admin-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './admin-header.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class AdminHeader {
  adminNavData = adminNavData;
  notificationData = notificationData;
  profileData = profileData;
  mobileMenuData = mobileMenuData;
  closeMenu() {
    const overlay = document.getElementById('adminMobileMenu');

    if (overlay) {
      overlay.classList.add('hidden');
      overlay.classList.remove('hs-overlay-open');
      overlay.classList.remove('translate-x-0');
    }

    document.body.classList.remove('hs-overlay-body-open');

    document.querySelectorAll('.hs-overlay-backdrop').forEach((el) => el.remove());
  }
}
