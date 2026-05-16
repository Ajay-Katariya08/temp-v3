import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element/bundle';
import { swiperData } from '../../data';
import { SwiperDirective } from '@/app/directive/swiper-directive';
register();

@Component({
  selector: 'landing-saas-classic-hero',
  imports: [RouterLink,SwiperDirective],
  templateUrl: './hero.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Hero {
  swiperData = swiperData;
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
