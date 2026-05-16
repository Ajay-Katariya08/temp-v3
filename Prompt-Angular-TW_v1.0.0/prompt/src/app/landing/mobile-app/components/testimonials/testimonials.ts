import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element';
import { testimonialData } from '../../data';

register();
@Component({
  selector: 'landing-mobile-app-testimonials',
  imports: [SwiperDirective],
  templateUrl: './testimonials.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Testimonials {

  testimonialData = testimonialData;

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    loop: true,
    autoHeight: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
    },
  };
}
