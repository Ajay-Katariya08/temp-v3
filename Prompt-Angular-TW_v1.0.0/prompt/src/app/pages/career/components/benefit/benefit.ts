import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { featureData } from '../../data';

@Component({
  selector: 'career-benefit',
  imports: [],
  templateUrl: './benefit.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Benefit {
  featureData = featureData;
}
