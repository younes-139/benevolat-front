import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestCitoyenComponent } from './best-citoyen.component';

describe('BestCitoyenComponent', () => {
  let component: BestCitoyenComponent;
  let fixture: ComponentFixture<BestCitoyenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestCitoyenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestCitoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
