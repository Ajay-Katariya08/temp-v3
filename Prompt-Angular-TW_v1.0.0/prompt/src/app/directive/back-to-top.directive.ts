// scroll-directive.directive.ts
import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  Inject,
  DestroyRef,
  inject,
} from '@angular/core';
import { ScrollService } from '../services/scroll.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[appScrollClass]',
  standalone: true,
})
export class ScrollClassDirective {
  private destroyRef = inject(DestroyRef);

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(ScrollService) private scrollService: ScrollService,
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    this.scrollService.updateScrollPosition(scrollPosition);
  }

  ngOnInit() {
    this.scrollService
      .getScrollObservable()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((position: any) => {
        if (position > 72) {
          this.renderer.removeClass(this.el.nativeElement, 'hidden');
        } else {
          this.renderer.addClass(this.el.nativeElement, 'hidden');
        }
      });
  }
}
