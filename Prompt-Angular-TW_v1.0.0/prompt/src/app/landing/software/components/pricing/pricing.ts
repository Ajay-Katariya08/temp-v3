import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { pricingData } from '../../data';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'landing-software-pricing',
  imports: [RouterLink],
  templateUrl: './pricing.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Pricing {
  pricingData = pricingData;
}
