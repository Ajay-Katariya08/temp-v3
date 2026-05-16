import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { serviceData } from '../../data';

@Component({
  selector: 'pricing-benefits',
  imports: [],
  templateUrl: './benefits.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Benefits {
  serviceData = serviceData;
}
