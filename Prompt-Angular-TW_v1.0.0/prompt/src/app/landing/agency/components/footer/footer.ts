import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { currentYear } from '@common/constants';
import { aboutData, companyData, socialLinkData } from '../../data';

@Component({
  selector: 'landing-agency-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Footer {
  currentYear = currentYear;
  aboutData = aboutData;
  companyData = companyData;
  socialLinkData = socialLinkData;
}
