import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotlistComponent } from './hotlist.component';

describe('HotlistComponent', () => {
  let component: HotlistComponent;
  let fixture: ComponentFixture<HotlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
