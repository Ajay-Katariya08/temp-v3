import { Component } from '@angular/core';
import { Header } from "@app/components/header/header";
import { Home } from './components/home/home';
import { App } from "@/app/app";
import { List } from "./components/list/list";
import { Footer } from "./components/footer/footer";
import { BackToTop } from "@app/components/back-to-top/back-to-top";

@Component({
  selector: 'app-blog',
  imports: [Header, Home, App, List, Footer, BackToTop],
  templateUrl: './blog.html',
  styles: ``,
})
  
export class Blog {}
