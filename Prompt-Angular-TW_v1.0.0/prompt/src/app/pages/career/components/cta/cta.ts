import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { infoData } from '../../data';

@Component({
  selector: 'career-cta',
  imports: [RouterLink],
  templateUrl: './cta.html',
  styles: ``,
})
  
export class Cta {
  infoData = infoData;
}
