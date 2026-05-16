import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { supportData } from '../../data';

@Component({
  selector: 'pricing-cta',
  imports: [RouterLink],
  templateUrl: './cta.html',
  styles: ``,
})
  
export class Cta {
  supportData = supportData;
}
