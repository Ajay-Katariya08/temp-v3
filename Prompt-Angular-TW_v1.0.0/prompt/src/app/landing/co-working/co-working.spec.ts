import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoWorking } from './co-working';

describe('CoWorking', () => {
  let component: CoWorking;
  let fixture: ComponentFixture<CoWorking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoWorking],
    }).compileComponents();

    fixture = TestBed.createComponent(CoWorking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
