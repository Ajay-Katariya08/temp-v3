import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { featuresData2, featuresData } from '../../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'landing-mobile-app-features',
  imports: [CommonModule],
  templateUrl: './features.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Features {
  featuresData = featuresData;
  featuresData2 = featuresData2;
}
