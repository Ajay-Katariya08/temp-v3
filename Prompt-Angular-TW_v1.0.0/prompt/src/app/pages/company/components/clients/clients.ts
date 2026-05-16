import { Component } from '@angular/core';
import { brandsData } from '../../data';

@Component({
  selector: 'company-clients',
  imports: [],
  templateUrl: './clients.html',
  styles: ``,
})
export class Clients {
  brandsData = brandsData;
}
