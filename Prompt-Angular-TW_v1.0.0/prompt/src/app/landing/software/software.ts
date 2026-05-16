import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Review } from './components/review/review';
import { Feature } from './components/feature/feature';
import { Pricing } from './components/pricing/pricing';
import { Testimonial } from './components/testimonial/testimonial';
import { Footer } from "./components/footer/footer";
import { App } from "@/app/app";


@Component({
  selector: 'app-software',
  imports: [Hero, Review, Feature, Pricing, Testimonial, Footer, App],
  templateUrl: './software.html',
  styles: ``,
})
  
export class Software {
}
