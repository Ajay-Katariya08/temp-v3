import { Component } from '@angular/core';
import { statsData } from '../../data';

@Component({
  selector: 'landing-crypto-stats',
  imports: [],
  templateUrl: './stats.html',
  styles: ``,
})
export class Stats {
  statsData = statsData;
}
