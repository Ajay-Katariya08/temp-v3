import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { featureData } from '../../data';

@Component({
  selector: 'landing-coworking-feature',
  imports: [],
  templateUrl: './feature.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Feature {
  featureData = featureData;
}
