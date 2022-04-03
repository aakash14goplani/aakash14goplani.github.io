import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsAddComponent } from './blogs-add.component';

describe('BlogsAddComponent', () => {
  let component: BlogsAddComponent;
  let fixture: ComponentFixture<BlogsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsAddComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
