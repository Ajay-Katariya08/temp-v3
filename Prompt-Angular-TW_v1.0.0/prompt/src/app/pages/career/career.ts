import { Component, Renderer2 } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Benefit } from "./components/benefit/benefit";
import { Culture } from "./components/culture/culture";
import { Job } from "./components/job/job";
import { Cta } from "./components/cta/cta";

@Component({
  selector: 'app-career',
  imports: [Hero, Benefit, Culture, Job, Cta],
  templateUrl: './career.html',
  styles: ``,
})
  
export class Career {
  constructor(private rendered: Renderer2) {}
  ngOnInit(): void {
    this.rendered.addClass(document.body, 'text-gray-800');
  }
  ngOnDestroy(): void {
    this.rendered.removeClass(document.body, 'text-gray-800');
  }
}
