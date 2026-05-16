import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { portfolioData } from '../../data';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Portfolio {
  portfolioData = portfolioData;
}
