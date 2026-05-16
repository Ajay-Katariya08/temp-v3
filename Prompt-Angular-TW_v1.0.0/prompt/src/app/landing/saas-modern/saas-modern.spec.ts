import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaasModern } from './saas-modern';

describe('SaasModern', () => {
  let component: SaasModern;
  let fixture: ComponentFixture<SaasModern>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaasModern],
    }).compileComponents();

    fixture = TestBed.createComponent(SaasModern);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
