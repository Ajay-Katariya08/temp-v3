import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { currentYear } from '@common/constants';

type SectionType = {
  title: string;
  links: string[];
};

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Footer {
  currentYear = currentYear;

  sectionData: SectionType[] = [
    {
      title: 'Platform',
      links: ['Demo', 'Pricing', 'Integrations', 'Status'],
    },
    {
      title: 'Knowledge Base',
      links: ['Blog', 'Help Center', 'Sales Tools catalog', 'API'],
    },
    {
      title: 'Company',
      links: ['About us', 'Career', 'Contact Us'],
    },
    {
      title: 'Legal',
      links: ['Usage Policy', 'Privacy Policy', 'Terms of Service', 'Trust'],
    },
  ];
}
