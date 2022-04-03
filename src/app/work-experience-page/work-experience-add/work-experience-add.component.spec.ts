import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceAddComponent } from './work-experience-add.component';

describe('WorkExperienceAddComponent', () => {
  let component: WorkExperienceAddComponent;
  let fixture: ComponentFixture<WorkExperienceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExperienceAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperienceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
