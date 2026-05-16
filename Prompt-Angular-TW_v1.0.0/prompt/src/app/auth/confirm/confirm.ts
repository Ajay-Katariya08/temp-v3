import { Component, CUSTOM_ELEMENTS_SCHEMA, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-confirm',
  imports: [RouterLink],
  templateUrl: './confirm.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Confirm {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'bg-default-100');
    this.renderer.addClass(document.body, 'tracking-wide');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'bg-default-100');
    this.renderer.removeClass(document.body, 'tracking-wide');
  }
}
