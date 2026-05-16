import { Route } from "@angular/router";

export const BLOG_ROUTES: Route[] = [
  {
    path: 'blog',
    loadComponent: () => import('./blog/blog').then((mod) => mod.Blog),
    data: { title: 'Blog' },
  },
  {
    path: 'blog/post',
    loadComponent: () => import('./blog-post/blog-post').then((mod) => mod.BlogPost),
    data: { title: 'Blog Post' },
  },
];