import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { serviceData } from '../../data';

@Component({
  selector: 'landing-agency-services',
  imports: [],
  templateUrl: './services.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Services {
  serviceData = serviceData;
}
