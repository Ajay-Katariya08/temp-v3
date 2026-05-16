import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SwiperOptions } from 'swiper/types';
import { Navigation } from 'swiper/modules';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { register } from 'swiper/element/bundle';
import { AuthService } from '@/app/services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
register();

const saas1 = 'assets/images/hero/saas1.png';
const saas2 = 'assets/images/hero/saas2.png';
const saas3 = 'assets/images/hero/saas3.png';

@Component({
  selector: 'app-login',
  imports: [RouterLink, SwiperDirective, FormsModule, CommonModule],
  templateUrl: './login.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Login implements OnInit, OnDestroy {
  constructor(
    private auth: AuthService,
    private router: Router,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'bg-default-100');
    this.renderer.addClass(document.body, 'tracking-wide');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'bg-default-100');
    this.renderer.removeClass(document.body, 'tracking-wide');
  }

  email = 'admin@example.com';
  password = 'password';
  error = '';

  onSubmit() {
    const isLoggedIn = this.auth.login(this.email, this.password);

    if (isLoggedIn) {
      this.router.navigate(['']);
    } else {
      this.error = 'Invalid email or password';
    }
  }

  sliderData = [
    {
      image: saas1,
      title: 'Manage your saas business with ease',
      description:
        'Make your saas application stand out with high-quality landing page designed and developed by professional.',
    },
    {
      image: saas2,
      title: 'The best way to showcase your mobile app',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br> accusantium.',
    },
    {
      image: saas3,
      title: 'Smart Solution that convert Lead to Customer',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br> accusantium.',
    },
  ];

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
