import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { projectCardData } from '../../data';

@Component({
  selector: 'landing-portfolio-project',
  imports: [RouterLink],
  templateUrl: './project.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Project {
  projectCardData = projectCardData;
}
