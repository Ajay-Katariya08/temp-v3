import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { blogData } from '../../data';

@Component({
  selector: 'landing-agency-blog',
  imports: [RouterLink],
  templateUrl: './blog.html',
  styles: ``,
})
  
export class Blog {
  blogData = blogData;
}
