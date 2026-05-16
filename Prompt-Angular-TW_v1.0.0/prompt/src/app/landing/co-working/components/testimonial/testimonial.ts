import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { testimonialData } from '../../data';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { register } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

register();

@Component({
  selector: 'landing-coworking-testimonial',
  imports: [SwiperDirective],
  templateUrl: './testimonial.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Testimonial {
  testimonialData = testimonialData;
  swiperTestimonial: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    autoHeight: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
    },
  };
}
