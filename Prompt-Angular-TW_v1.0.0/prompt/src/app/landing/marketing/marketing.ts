import { Component } from '@angular/core';
import { App } from "@/app/app";
import { Hero } from "./components/hero/hero";
import { Feature } from "./components/feature/feature";
import { Testimonial } from "./components/testimonial/testimonial";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-marketing',
  imports: [App, Hero, Feature, Testimonial, Footer],
  templateUrl: './marketing.html',
  styles: ``,
})
export class Marketing {

}
