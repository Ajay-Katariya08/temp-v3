import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { ProjectType } from '../../data';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-recent-projects',
  imports: [RouterLink],
  templateUrl: './recent-projects.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class RecentProjects {
  @Input() item!: ProjectType;
}
