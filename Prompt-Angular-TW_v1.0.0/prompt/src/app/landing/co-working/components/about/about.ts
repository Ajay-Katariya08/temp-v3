import { Component } from '@angular/core';
import { aboutData } from '../../data';

@Component({
  selector: 'landing-coworking-about',
  imports: [],
  templateUrl: './about.html',
  styles: ``,
})
  
export class About {
  aboutData = aboutData;
}
