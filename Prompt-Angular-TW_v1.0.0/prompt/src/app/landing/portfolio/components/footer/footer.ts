import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { currentYear } from '@common/constants';

@Component({
  selector: 'landing-portfolio-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styles: ``,
})
  
export class Footer {
  currentYear = currentYear
}
