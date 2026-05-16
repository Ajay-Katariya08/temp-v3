import { JarallaxDirective } from '@/app/directive/jarallax.directive';
import { Component } from '@angular/core';

@Component({
  selector: 'company-hero',
  imports: [JarallaxDirective],
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {}
