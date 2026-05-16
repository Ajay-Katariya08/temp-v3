import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { featureData } from '../../data';

@Component({
  selector: 'landing-marketing-feature',
  imports: [RouterLink],
  templateUrl: './feature.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Feature {
  featureData = featureData;
}
