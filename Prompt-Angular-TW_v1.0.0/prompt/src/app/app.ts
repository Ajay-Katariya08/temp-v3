import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { Event, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TitleService } from './services/title.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
  
export class App {
  @Input() isCustomClassEnabled: boolean = false;
  @ViewChild('el') el!: ElementRef;
  constructor(
    private router: Router,
    private titleService: TitleService,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    AOS.init();
    this.updateBodyClass()
    this.titleService.init();
    this.router.events.subscribe((event: Event) => {
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
