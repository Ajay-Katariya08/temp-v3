import { Component } from '@angular/core';
import { Header } from "@app/components/header/header";
import { BackToTop } from "@app/components/back-to-top/back-to-top";
import { Inquiry } from "./components/inquiry/inquiry";
import { Footer } from "./components/footer/footer";
import { Hero } from "./components/hero/hero";

@Component({
  selector: 'app-contact',
  imports: [Header, Hero, Inquiry, Footer, BackToTop],
  templateUrl: './contact.html',
  styles: ``,
})
  
export class Contact {}
