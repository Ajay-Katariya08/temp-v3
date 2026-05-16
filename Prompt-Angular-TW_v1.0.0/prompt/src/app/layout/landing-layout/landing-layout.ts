import { Component } from '@angular/core';
import { Header } from "@app/components/header/header";
import { BackToTop } from "@app/components/back-to-top/back-to-top";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing-layout',
  imports: [Header, RouterOutlet, BackToTop],
  templateUrl: './landing-layout.html',
  styles: ``,
})
  
export class LandingLayout {}
