import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToHomePage = () => redirectUnauthorizedTo(['home']);

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home-page/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home-edit',
    loadChildren: () => import('./home-page/home-edit/home-edit.module').then(m => m.HomeEditModule),
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToHomePage
    }
  },
  {
    path: 'skills',
    loadChildren: () => import('./skills-page/skills/skills.module').then(m => m.SkillsModule)
  },
  {
    path: 'skills-edit',
    loadChildren: () => import('./skills-page/skills-edit/skills-edit.module').then(m => m.SkillsEditModule),
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToHomePage
    }
  },
  {
    path: 'education',
    loadChildren: () => import('./education-page/education/education.module').then(m => m.EducationModule)
  },
  {
    path: 'education-edit',
    loadChildren: () => import('./education-page/education-edit/education-edit.module').then(m => m.EducationEditModule),
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToHomePage
    }
  },
  {
    path: 'work-experience',
    loadChildren: () => import('./work-experience-page/work-experience/work-experience.module').then(m => m.WorkExperienceModule)
  },
  {
    path: 'work-experience-edit',
    loadChildren: () => import('./work-experience-page/work-experience-edit/work-experience-edit.module').then(m => m.WorkExperienceEditModule),
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToHomePage
    }
  },
  {
    path: 'work-experience-add',
    loadChildren: () => import('./work-experience-page/work-experience-add/work-experience-add.module').then(m => m.WorkExperienceAddModule),
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToHomePage
    }
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects-page/projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'projects-edit',
    loadChildren: () => import('./projects-page/projects-edit/projects-edit.module').then(m => m.ProjectsEditModule),
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToHomePage
    }
  },
  {
    path: 'projects-add',
    loadChildren: () => import('./projects-page/projects-add/projects-add.module').then(m => m.ProjectsAddModule),
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToHomePage
    }
  },
  {
    path: 'blogs',
    loadChildren: () => import('./blogs-page/blogs/blogs.module').then(m => m.BlogsModule)
  },
  {
    path: 'blogs-edit',
    loadChildren: () => import('./blogs-page/blogs-edit/blogs-edit.module').then(m => m.BlogsEditModule),
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToHomePage
    }
  },
  {
    path: 'blogs-add',
    loadChildren: () => import('./blogs-page/blogs-add/blogs-add.module').then(m => m.BlogsAddModule),
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToHomePage
    }
  },
  {
    path: 'navigation-edit',
    loadChildren: () => import('./navigation-edit-page/navigation-edit/navigation-edit.module').then(m => m.NavigationEditModule),
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToHomePage
    }
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
