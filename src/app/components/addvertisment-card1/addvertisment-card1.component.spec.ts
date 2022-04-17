import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvertismentCard1Component } from './addvertisment-card1.component';

describe('AddvertismentCard1Component', () => {
  let component: AddvertismentCard1Component;
  let fixture: ComponentFixture<AddvertismentCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddvertismentCard1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvertismentCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
