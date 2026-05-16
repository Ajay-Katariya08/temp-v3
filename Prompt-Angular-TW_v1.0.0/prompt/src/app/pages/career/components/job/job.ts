import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { jobData } from '../../data';

@Component({
  selector: 'career-job',
  imports: [RouterLink],
  templateUrl: './job.html',
  styles: ``,
})
  
export class Job {
  jobData = jobData;
}
