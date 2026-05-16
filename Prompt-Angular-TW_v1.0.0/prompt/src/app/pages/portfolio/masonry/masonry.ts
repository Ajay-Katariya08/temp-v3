import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { portfolioData } from './data';
import { GlightboxDirective } from "@/app/directive/glightbox.directive";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-masonry',
  imports: [GlightboxDirective, RouterLink],
  templateUrl: './masonry.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Masonry {
  portfolioData = portfolioData;
  masonryItem = portfolioData;
  AllmasonryItem = portfolioData;
  selectedFilter: string = '';

  // filter data
  filterItems(category: string) {
    this.selectedFilter = category;
    if (category) {
      this.masonryItem = this.AllmasonryItem.filter((data: any) => {
        return data.category.includes(category);
      });
    } else {
      this.masonryItem = this.AllmasonryItem;
    }
  }
}
