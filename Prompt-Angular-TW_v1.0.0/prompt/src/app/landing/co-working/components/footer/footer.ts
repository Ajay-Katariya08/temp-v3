import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { currentYear } from '@common/constants';
import { contactData, navigationData } from '../../data';

@Component({
  selector: 'landing-coworking-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Footer {
  currentYear = currentYear;
  navigationData = navigationData;
  contactData = contactData;
}
