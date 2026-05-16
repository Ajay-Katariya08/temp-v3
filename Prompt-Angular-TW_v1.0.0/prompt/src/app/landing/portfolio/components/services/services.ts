import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { serviceCardData } from '../../data';

@Component({
  selector: 'landing-portfolio-services',
  imports: [],
  templateUrl: './services.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Services {
  serviceCardData = serviceCardData;
}
