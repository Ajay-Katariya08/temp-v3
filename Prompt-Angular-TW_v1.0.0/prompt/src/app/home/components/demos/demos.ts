import { Component } from '@angular/core';
import { demoData } from '../../data';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-demos',
  imports: [RouterLink],
  templateUrl: './demos.html',
  styles: ``,
})
export class Demos {
  demoData = demoData;
}
