import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperienceComponent } from './work-experience.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: WorkExperienceComponent }
];

@NgModule({
  declarations: [
    WorkExperienceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WorkExperienceModule { }
