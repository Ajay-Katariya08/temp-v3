import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { footerLinks } from '../../data';
import { currentYear } from '@common/constants';

@Component({
  selector: 'landing-startup-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Footer {
  footerLinks = footerLinks;
  currentYear =currentYear
}
