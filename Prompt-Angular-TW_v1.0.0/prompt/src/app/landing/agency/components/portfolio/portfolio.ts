import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { projectData } from '../../data';

@Component({
  selector: 'landing-agency-portfolio',
  imports: [RouterLink],
  templateUrl: './portfolio.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Portfolio {
  projectData = projectData;
}
