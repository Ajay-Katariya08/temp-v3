import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Masonry } from './masonry';

describe('Masonry', () => {
  let component: Masonry;
  let fixture: ComponentFixture<Masonry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Masonry],
    }).compileComponents();

    fixture = TestBed.createComponent(Masonry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
