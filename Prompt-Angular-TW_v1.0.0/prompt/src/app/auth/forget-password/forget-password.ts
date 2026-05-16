import { Component, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  imports: [RouterLink],
  templateUrl: './forget-password.html',
  styles: ``,
})
export class ForgetPassword {
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
