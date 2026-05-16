import { Component } from '@angular/core';
import { integrationData } from '../../data';

@Component({
  selector: 'landing-startup-integrations',
  imports: [],
  templateUrl: './integrations.html',
  styles: ``,
})
export class Integrations {
  integrationData=integrationData
}
