import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { blogData, tagData } from '../../data';

@Component({
  selector: 'blog-list',
  imports: [RouterLink],
  templateUrl: './list.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class List {
  tagData = tagData;
  blogData = blogData;
}
