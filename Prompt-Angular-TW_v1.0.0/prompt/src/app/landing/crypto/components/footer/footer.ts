import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { currentYear } from '@common/constants';
import { RouterLink } from '@angular/router';
import { sectionData } from '../../data';

@Component({
  selector: 'landing-crypto-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Footer {
  currentYear = currentYear;
  sectionData = sectionData;
}
