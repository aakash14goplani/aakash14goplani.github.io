import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContentService } from '../shared/content-service/content.service';
import { IProjectsPage } from '../shared/global.model';
import { projects } from '../shared/site-content/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit {

  projectContents$: BehaviorSubject<Array<IProjectsPage>> = new BehaviorSubject<Array<IProjectsPage>>(projects.en);

  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit(): void {
    type key = keyof typeof projects;
    this.contentService.getApplicationLocale().subscribe((locale) => {
      this.projectContents$.next(projects[locale as key]);
    });
  }

  trackById(index: number, item: IProjectsPage) {
    return index + item.id;
  }

  updateShowMoreContentForProject(project: IProjectsPage): void {
    project.showMoreContent = !project.showMoreContent;
  }

}
