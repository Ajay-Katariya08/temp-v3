import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { imageData } from '../../data';
import { SwiperDirective } from '@/app/directive/swiper-directive';
register();

@Component({
  selector: 'app-hero',
  imports: [SwiperDirective],
  templateUrl: './hero.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Hero {
  imageData = imageData;

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

  constructor(private cdr: ChangeDetectorRef) {}

  typewriterTexts = [
    'saas',
    'mobile app',
    'software',
    'startup',
    'agency',
    'portfolio',
    'coworking',
    'crypto',
    'marketing',
  ];

  currentText: string = ''; 
  private currentTextIndex = 0;
  private currentCharIndex = 0;
  private deleting = false;

  ngOnInit(): void {
    this.typeText();
  }

  private typeText(): void {
    const text = this.typewriterTexts[this.currentTextIndex];

    if (this.deleting) {
      this.currentText = text.substring(0, this.currentCharIndex--);
    } else {
      this.currentText = text.substring(0, this.currentCharIndex++);
    }

    
    this.cdr.detectChanges();

    if (!this.deleting && this.currentCharIndex > text.length) {
      setTimeout(() => {
        this.deleting = true;
      }, 800);
    } else if (this.deleting && this.currentCharIndex < 0) {
      this.deleting = false;
      this.currentTextIndex = (this.currentTextIndex + 1) % this.typewriterTexts.length;
      this.currentCharIndex = 0;
    }

    setTimeout(() => this.typeText(), this.deleting ? 50 : 80);
  }
}
