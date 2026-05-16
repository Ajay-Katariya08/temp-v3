import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { sliderData } from '../../data';
import { SwiperDirective } from '@/app/directive/swiper-directive';

@Component({
  selector: 'landing-coworking-hero',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './hero.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Hero {
  sliderData = sliderData;

  swiperConfig: SwiperOptions = {
    modules: [Navigation],
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
