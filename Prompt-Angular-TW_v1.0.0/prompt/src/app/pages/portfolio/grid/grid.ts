import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { portfolioData } from './data';
import { GlightboxDirective } from "@/app/directive/glightbox.directive";

@Component({
  selector: 'app-grid',
  imports: [CommonModule, RouterLink, GlightboxDirective],
  templateUrl: './grid.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Grid {
  portfolioData = portfolioData;

  item = portfolioData;
  allItem = portfolioData;
  selectedFilter: string = '';

  // filter items
  filterItems(category: string) {
    this.selectedFilter = category;
    if (category) {
      this.item = this.allItem.filter((data: any) => {
        return data.groups.includes(category);
      });
    } else {
      this.item = this.allItem;
    }
  }
}
