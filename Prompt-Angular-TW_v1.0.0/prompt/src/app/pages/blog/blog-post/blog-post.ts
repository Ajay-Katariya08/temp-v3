import { Component } from '@angular/core';
import { Header } from "@app/components/header/header";
import { BackToTop } from "@app/components/back-to-top/back-to-top";
import { Home } from "./components/home/home";
import { Navigation } from "./components/navigation/navigation";
import { Comments } from "./components/comments/comments";
import { Footer } from "./components/footer/footer";
import { App } from "@/app/app";

@Component({
  selector: 'app-blog-post',
  imports: [Header, BackToTop, Home, Navigation, Comments, Footer, App],
  templateUrl: './blog-post.html',
  styles: ``,
})
  
export class BlogPost {}
