import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element/bundle';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { testimonialData } from '../../data';
register();

@Component({
  selector: 'app-testimonials',
  imports: [SwiperDirective],
  templateUrl: './testimonials.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Testimonials {
  testimonialData = testimonialData;
  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    rewind: true,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
    },
  };
}
