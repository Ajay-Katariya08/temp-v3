import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { projectData, taskData } from './data';
import { RecentProjects } from './components/recent-projects/recent-projects';
import { Tasks } from './components/tasks/tasks';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, RecentProjects, Tasks],
  templateUrl: './dashboard.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Dashboard {
  projectData = projectData;
  taskData = taskData;
}
