import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from "../navbar/navbar";
import { MobileNav } from "../mobile-nav/mobile-nav";

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule, Navbar, MobileNav],
  templateUrl: './header.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Header {
  isSticky = false;
  isDarkClassActive: boolean = true;

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 50;
  }

  isCustomClassActive(route: string): boolean {
    return this.router.url === route;
  }
}
