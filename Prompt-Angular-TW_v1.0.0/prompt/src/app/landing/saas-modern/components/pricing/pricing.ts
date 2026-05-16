import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { pricingData } from '../../data';

@Component({
  selector: 'landing-saas-modern-pricing',
  imports: [RouterLink],
  templateUrl: './pricing.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Pricing {
  pricingData = pricingData;
}
