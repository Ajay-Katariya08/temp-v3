import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { currentYear } from '@common/constants';

@Component({
  selector: 'app-admin-footer',
  imports: [RouterLink],
  templateUrl: './admin-footer.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
  
export class AdminFooter {
  currentYear = currentYear
}
