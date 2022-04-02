import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsAddComponent } from './blogs-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BlogsAddComponent }
];

@NgModule({
  declarations: [
    BlogsAddComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class BlogsAddModule { }
