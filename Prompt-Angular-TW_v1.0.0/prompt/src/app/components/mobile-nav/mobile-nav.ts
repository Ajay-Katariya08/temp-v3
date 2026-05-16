import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MENU_DATA } from './data';

@Component({
  selector: 'app-mobile-nav',
  imports: [RouterLink],
  templateUrl: './mobile-nav.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class MobileNav {
  MENU_DATA = MENU_DATA;
  closeMenu() {
    const overlay = document.getElementById('mobileMenu');
    if (overlay) {
      HSOverlay.close(overlay);
    }
  }
}