import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Pagination } from 'swiper/modules';

register();

@Component({
  selector: 'landing-software-testimonial',
  imports: [SwiperDirective],
  templateUrl: './testimonial.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Testimonial {
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
