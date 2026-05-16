import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { brandImage } from '../../data';

@Component({
  selector: 'landing-software-review',
  imports: [],
  templateUrl: './review.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Review {
  brandImage = brandImage;
}
