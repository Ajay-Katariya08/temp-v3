import { Component } from '@angular/core';
import { blogData } from '../../data';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'landing-crypto-blog',
  imports: [RouterLink],
  templateUrl: './blog.html',
  styles: ``,
})
export class Blog {
  blogData = blogData;
}
