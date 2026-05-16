import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { workData } from '../../data';

@Component({
  selector: 'landing-coworking-workspace',
  imports: [RouterLink],
  templateUrl: './workspace.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Workspace {
  workData = workData;
}
