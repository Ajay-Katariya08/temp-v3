import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { featureData } from '../../data';

@Component({
  selector: 'landing-crypto-features',
  imports: [],
  templateUrl: './features.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Features {
  featureData = featureData;
}
