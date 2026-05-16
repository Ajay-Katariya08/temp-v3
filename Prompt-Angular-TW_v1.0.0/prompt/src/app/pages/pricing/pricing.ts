import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Plans } from "./components/plans/plans";
import { Benefits } from "./components/benefits/benefits";
import { Faqs } from "./components/faqs/faqs";
import { Cta } from "./components/cta/cta";

@Component({
  selector: 'app-pricing',
  imports: [Hero, Plans, Benefits, Faqs, Cta],
  templateUrl: './pricing.html',
  styles: ``,
})
export class Pricing {}
