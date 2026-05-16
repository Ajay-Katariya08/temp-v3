import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coins } from './coins';

describe('Coins', () => {
  let component: Coins;
  let fixture: ComponentFixture<Coins>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coins],
    }).compileComponents();

    fixture = TestBed.createComponent(Coins);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
