import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { faqData } from '../../data';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'landing-saas-modern-faq',
  imports: [RouterLink],
  templateUrl: './faq.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Faq {
  faqData = faqData;
}
