import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Process } from "./components/process/process";

@Component({
  selector: 'app-helps',
  imports: [Hero, Process],
  templateUrl: './helps.html',
  styles: ``,
})
export class Helps {}
