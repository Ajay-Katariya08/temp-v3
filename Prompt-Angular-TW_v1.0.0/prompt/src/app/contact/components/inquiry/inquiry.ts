import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { contactData } from '../../data';

@Component({
  selector: 'contact-inquiry',
  imports: [RouterLink, CommonModule],
  templateUrl: './inquiry.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Inquiry {
  contactData = contactData;
}
