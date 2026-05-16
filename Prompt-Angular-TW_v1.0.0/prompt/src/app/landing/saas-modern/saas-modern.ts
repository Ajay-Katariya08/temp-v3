import { Component, Renderer2 } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Feature } from "./components/feature/feature";
import { Clients } from "./components/clients/clients";
import { Testimonial } from "./components/testimonial/testimonial";
import { Pricing } from "./components/pricing/pricing";
import { Faq } from "./components/faq/faq";
import { Footer } from '@app/components/footer/footer';


@Component({
  selector: 'app-saas-modern',
  imports: [Hero, Feature, Clients, Testimonial, Pricing, Faq, Footer],
  templateUrl: './saas-modern.html',
  styles: ``,
})
  
export class SaasModern {
  constructor(private rendered: Renderer2) {}
  ngOnInit(): void {
    this.rendered.addClass(document.body, 'text-default-800');
  }
  ngOnDestroy(): void {
    this.rendered.removeClass(document.body, 'text-default-800');
  }
}
