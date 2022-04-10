import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperienceAddPositionComponent } from './work-experience-add-position.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    WorkExperienceAddPositionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    WorkExperienceAddPositionComponent
  ]
})
export class WorkExperienceAddPositionModule { }
