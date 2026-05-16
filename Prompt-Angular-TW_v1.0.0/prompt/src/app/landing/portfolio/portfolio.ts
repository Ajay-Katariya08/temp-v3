import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Services } from "./components/services/services";
import { Project } from "./components/project/project";
import { Testimonials } from "./components/testimonials/testimonials";
import { Cta } from "./components/cta/cta";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-portfolio',
  imports: [Hero, Services, Project, Testimonials, Cta, Footer],
  templateUrl: './portfolio.html',
  styles: ``,
})
  
export class Portfolio {}
