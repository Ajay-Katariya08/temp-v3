import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { featuresData } from '../../data';

@Component({
  selector: 'app-feature',
  imports: [],
  templateUrl: './feature.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Feature {
  featuresData = featuresData
}
