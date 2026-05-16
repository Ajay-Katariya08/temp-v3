import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { featuresData, platformData } from '../../data';

@Component({
  selector: 'landing-software-feature',
  imports: [RouterLink],
  templateUrl: './feature.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Feature {
  platformData = platformData;
  featuresData=featuresData
}
