import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkExperienceEditComponent } from './work-experience-edit.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { WorkExperienceAddPositionModule } from './work-experience-add-position/work-experience-add-position.module';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  { path: '', component: WorkExperienceEditComponent }
];
@NgModule({
  declarations: [
    WorkExperienceEditComponent
  ],
  providers: [
    DatePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    WorkExperienceAddPositionModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatStepperModule,
    MatDialogModule
  ]
})
export class WorkExperienceEditModule { }
