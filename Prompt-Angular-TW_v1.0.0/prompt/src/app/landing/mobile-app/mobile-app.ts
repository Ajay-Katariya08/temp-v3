import { Component } from '@angular/core';
import { Home } from "./components/home/home";
import { Features } from "./components/features/features";
import { Testimonials } from "./components/testimonials/testimonials";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-mobile-app',
  imports: [Home, Features, Testimonials, Footer],
  templateUrl: './mobile-app.html',
  styles: ``,
})
  
export class MobileApp {}
