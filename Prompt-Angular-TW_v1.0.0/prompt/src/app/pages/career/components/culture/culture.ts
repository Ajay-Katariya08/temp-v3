import { Component } from '@angular/core';
import { cultureData } from '../../data';

@Component({
  selector: 'career-culture',
  imports: [],
  templateUrl: './culture.html',
  styles: ``,
})
  
export class Culture {
  cultureData = cultureData;
}
