import { Component } from '@angular/core';
import { brandimages } from '../../data';

@Component({
  selector: 'landing-startup-clients',
  imports: [],
  templateUrl: './clients.html',
  styles: ``,
})
export class Clients {
  brandimages = brandimages;
}
