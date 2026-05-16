import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { accordionData, featuresData } from '../../data';

@Component({
  selector: 'landing-saas-modern-feature',
  imports: [RouterLink],
  templateUrl: './feature.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Feature {
  featuresData = featuresData;
  accordionData = accordionData;
}
