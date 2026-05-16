import { Component } from '@angular/core';
import { Header } from "@app/components/header/header";
import { RouterOutlet } from '@angular/router';
import { BackToTop } from "@app/components/back-to-top/back-to-top";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-pages-layout',
  imports: [Header, RouterOutlet, BackToTop, Footer],
  templateUrl: './pages-layout.html',
  styles: ``,
})
  
export class PagesLayout {}
