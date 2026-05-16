import { Component } from '@angular/core';
import { currentYear } from '@common/constants';
import { RouterLink } from '@angular/router';
import { footerLinks } from '../../data';

@Component({
  selector: 'landing-marketing-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styles: ``,
})
export class Footer {
  currentYear = currentYear;
  footerLinks = footerLinks;
}
