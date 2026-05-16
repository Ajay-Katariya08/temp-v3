import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Portfolio } from "./components/portfolio/portfolio";
import { Testimonials } from "./components/testimonials/testimonials";
import { Navigation } from "./components/navigation/navigation";

@Component({
  selector: 'app-item',
  imports: [Hero, Portfolio, Testimonials, Navigation],
  templateUrl: './item.html',
  styles: ``,
})
export class Item {}
