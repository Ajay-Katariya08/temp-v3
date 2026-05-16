import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { Navigation } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
register();

const saas1 = 'assets/images/hero/saas1.png';
const saas2 = 'assets/images/hero/saas2.png';
const saas3 = 'assets/images/hero/saas3.png';

@Component({
  selector: 'app-signup',
  imports: [SwiperDirective, RouterLink, ReactiveFormsModule],
  templateUrl: './signup.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Signup implements OnInit, OnDestroy {
  constructor(
    private renderer: Renderer2,
    private fb: FormBuilder,
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit(): void {
    this.renderer.addClass(document.body, 'bg-default-100');
    this.renderer.addClass(document.body, 'tracking-wide');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'bg-default-100');
    this.renderer.removeClass(document.body, 'tracking-wide');
  }

  registerForm: FormGroup;

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      this.registerForm.markAllAsTouched();
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
