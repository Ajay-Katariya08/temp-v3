import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { faqData } from '../../data';

@Component({
  selector: 'pricing-faqs',
  imports: [],
  templateUrl: './faqs.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Faqs {
  faqData = faqData;
}
