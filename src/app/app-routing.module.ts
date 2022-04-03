import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'home-edit', loadChildren: () => import('./home-edit/home-edit.module').then(m => m.HomeEditModule) },
  { path: 'skills', loadChildren: () => import('./skills/skills.module').then(m => m.SkillsModule) },
  { path: 'skills-edit', loadChildren: () => import('./skills-edit/skills-edit.module').then(m => m.SkillsEditModule) },
  { path: 'education', loadChildren: () => import('./education/education.module').then(m => m.EducationModule) },
  { path: 'education-edit', loadChildren: () => import('./education-edit/education-edit.module').then(m => m.EducationEditModule) },
  { path: 'work-experience', loadChildren: () => import('./work-experience/work-experience.module').then(m => m.WorkExperienceModule) },
  { path: 'work-experience-edit', loadChildren: () => import('./work-experience-edit/work-experience-edit.module').then(m => m.WorkExperienceEditModule) },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'projects-edit', loadChildren: () => import('./projects-edit/projects-edit.module').then(m => m.ProjectsEditModule) },
  { path: 'projects-add', loadChildren: () => import('./projects-add/projects-add.module').then(m => m.ProjectsAddModule) },
  { path: 'blogs', loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule) },
  { path: 'blogs-edit', loadChildren: () => import('./blogs-edit/blogs-edit.module').then(m => m.BlogsEditModule) },
  { path: 'blogs-add', loadChildren: () => import('./blogs-add/blogs-add.module').then(m => m.BlogsAddModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
