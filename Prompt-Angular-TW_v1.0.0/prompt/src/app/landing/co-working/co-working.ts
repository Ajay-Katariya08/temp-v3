import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Feature } from "./components/feature/feature";
import { Workspace } from "./components/workspace/workspace";
import { Testimonial } from "./components/testimonial/testimonial";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-co-working',
  imports: [Hero, About, Feature, Workspace, Testimonial, Footer],
  templateUrl: './co-working.html',
  styles: ``,
})
  
export class CoWorking {}
