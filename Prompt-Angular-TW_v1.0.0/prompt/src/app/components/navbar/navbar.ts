import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { menuItems, MenuItemType } from './data';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Navbar {
  menuItems = menuItems;
  constructor(private router: Router) {}
  isChildActive(item: MenuItemType): boolean {
    if (item.url && this.router.url === item.url) return true;
    if (!item.children) return false;
    return item.children.some((child: MenuItemType) => this.isChildActive(child));
  }

  isActive(item: MenuItemType): boolean {
    return this.router.url === item.url;
  }
}
