import { ScrollClassDirective } from '@/app/directive/back-to-top.directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  imports: [ScrollClassDirective],
  templateUrl: './back-to-top.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BackToTop {
  topToScroll() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
