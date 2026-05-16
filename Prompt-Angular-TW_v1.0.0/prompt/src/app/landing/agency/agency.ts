import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Services } from "./components/services/services";
import { Portfolio } from "./components/portfolio/portfolio";
import { Clients } from "./components/clients/clients";
import { Blog } from "./components/blog/blog";
import { Hiring } from "./components/hiring/hiring";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-agency',
  imports: [Hero, Services, Portfolio, Clients, Blog, Hiring, Footer],
  templateUrl: './agency.html',
  styles: ``,
})
  
export class Agency {}
