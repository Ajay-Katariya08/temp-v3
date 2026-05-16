import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { jobData } from '../../data';

@Component({
  selector: 'landing-agency-hiring',
  imports: [RouterLink],
  templateUrl: './hiring.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Hiring {
  jobData = jobData;
}
