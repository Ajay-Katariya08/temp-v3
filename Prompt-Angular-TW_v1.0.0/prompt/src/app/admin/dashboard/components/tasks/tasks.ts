import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { TaskType } from '../../data';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Tasks {
  @Input() item!: TaskType;
}
