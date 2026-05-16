import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { accordionData, helpData } from '../../data';

@Component({
  selector: 'helps-process',
  imports: [RouterLink],
  templateUrl: './process.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Process {
  accordionData = accordionData;
  helpData = helpData;
}
