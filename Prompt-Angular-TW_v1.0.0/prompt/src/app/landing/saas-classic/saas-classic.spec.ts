import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasClassic } from './saas-classic';

describe('SaasClassic', () => {
  let component: SaasClassic;
  let fixture: ComponentFixture<SaasClassic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaasClassic],
    }).compileComponents();

    fixture = TestBed.createComponent(SaasClassic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
