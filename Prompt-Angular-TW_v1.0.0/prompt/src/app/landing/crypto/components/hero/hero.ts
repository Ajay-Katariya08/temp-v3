import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'landing-crypto-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {
  constructor(private cdr: ChangeDetectorRef) {}

  typewriterTexts = ['Crypto', 'NFT'];

  currentText: string = '';
  private currentTextIndex = 0;
  private currentCharIndex = 0;
  private deleting = false;

  ngOnInit(): void {
    this.typeText();
  }

  private typeText(): void {
    const text = this.typewriterTexts[this.currentTextIndex];

    if (this.deleting) {
      this.currentText = text.substring(0, this.currentCharIndex--);
    } else {
      this.currentText = text.substring(0, this.currentCharIndex++);
    }

    this.cdr.detectChanges();

    if (!this.deleting && this.currentCharIndex === text.length + 1) {
      this.deleting = true;
      setTimeout(() => this.typeText(), 800);
      return;
    }

    if (this.deleting && this.currentCharIndex < 0) {
      this.deleting = false;
      this.currentTextIndex = (this.currentTextIndex + 1) % this.typewriterTexts.length;
      this.currentCharIndex = 0;
    }

    setTimeout(() => this.typeText(), this.deleting ? 80 : 150);
  }
}
