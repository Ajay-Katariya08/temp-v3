import type { IStaticMethods } from 'preline/dist';
import type { SwiperOptions } from 'swiper/types';
import type HSOverlay from 'preline/dist/overlay';

declare global {
  interface SwiperContainer extends HTMLElement {
    initialize: () => void;
    config?: SwiperOptions;
  }

  interface Window {
    HSStaticMethods: IStaticMethods;
  }
  interface HTMLElementTagNameMap {
    'swiper-container': SwiperContainer;
  }
  var HSOverlay: typeof HSOverlay;
}

export {};
