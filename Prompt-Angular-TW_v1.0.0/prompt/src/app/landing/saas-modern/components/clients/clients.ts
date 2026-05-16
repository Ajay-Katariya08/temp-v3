import { Component } from '@angular/core';
import { clientData } from '../../data';

@Component({
  selector: 'landing-saas-modern-clients',
  imports: [],
  templateUrl: './clients.html',
  styles: ``,
})
  
export class Clients {
  clientData = clientData;
}
