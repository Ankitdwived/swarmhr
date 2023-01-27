import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcproComponent } from './searcpro.component';

describe('SearcproComponent', () => {
  let component: SearcproComponent;
  let fixture: ComponentFixture<SearcproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearcproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearcproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
