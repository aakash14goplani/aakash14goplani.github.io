import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  { path: '', component: BlogsComponent }
];

@NgModule({
  declarations: [
    BlogsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class BlogsModule { }
