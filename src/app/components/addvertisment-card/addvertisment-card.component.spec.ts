import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvertismentCardComponent } from './addvertisment-card.component';

describe('AddvertismentCardComponent', () => {
  let component: AddvertismentCardComponent;
  let fixture: ComponentFixture<AddvertismentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddvertismentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvertismentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
