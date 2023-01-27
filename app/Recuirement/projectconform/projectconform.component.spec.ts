import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectconformComponent } from './projectconform.component';

describe('ProjectconformComponent', () => {
  let component: ProjectconformComponent;
  let fixture: ComponentFixture<ProjectconformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectconformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectconformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
