import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcusComponent } from './addcus.component';

describe('AddcusComponent', () => {
  let component: AddcusComponent;
  let fixture: ComponentFixture<AddcusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
