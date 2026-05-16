import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { pricingData } from '../../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pricing-plans',
  imports: [RouterLink, CommonModule],
  templateUrl: './plans.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Plans {
  pricingData = pricingData;
}
