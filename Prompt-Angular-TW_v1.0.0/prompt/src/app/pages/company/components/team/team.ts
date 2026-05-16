import { Component } from '@angular/core';
import { teamData } from '../../data';

@Component({
  selector: 'company-team',
  imports: [],
  templateUrl: './team.html',
  styles: ``,
})
export class Team {
  teamData = teamData;
}
