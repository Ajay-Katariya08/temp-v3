import { Component, DestroyRef, Input, Renderer2, inject } from '@angular/core';
import { Event, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TitleService } from './services/title.service';
import * as AOS from 'aos';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
  
export class App {
  @Input() isCustomClassEnabled: boolean = false;

  private destroyRef = inject(DestroyRef);

  constructor(
    private router: Router,
    private titleService: TitleService,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    AOS.init();
    this.updateBodyClass()
    this.titleService.init();
    this.router.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => window.HSStaticMethods.autoInit(), 100);
      }
    });
  }
  private updateBodyClass() {
    const className = 'text-default-700';

    if (this.isCustomClassEnabled) {
      this.renderer.addClass(document.body, className);
    } else {
      this.renderer.removeClass(document.body, className);
    }
  }

  ngOnDestroy() {
    this.isCustomClassEnabled = false; 
    this.updateBodyClass();
  }
}
