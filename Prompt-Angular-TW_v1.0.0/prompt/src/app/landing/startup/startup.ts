import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Clients } from "./components/clients/clients";
import { Feature } from "./components/feature/feature";
import { Integrations } from "./components/integrations/integrations";
import { Pricing } from "./components/pricing/pricing";
import { Footer } from "./components/footer/footer";
import { App } from "@/app/app";

@Component({
  selector: 'app-startup',
  imports: [Hero, Clients, Feature, Integrations, Pricing, Footer, App],
  templateUrl: './startup.html',
  styles: ``,
})
export class Startup {}
