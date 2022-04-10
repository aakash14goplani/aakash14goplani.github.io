import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceAddPositionComponent } from './work-experience-add-position.component';

describe('WorkExperienceAddPositionComponent', () => {
  let component: WorkExperienceAddPositionComponent;
  let fixture: ComponentFixture<WorkExperienceAddPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExperienceAddPositionComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperienceAddPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
