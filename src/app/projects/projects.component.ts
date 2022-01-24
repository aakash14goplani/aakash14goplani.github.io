import { Component } from '@angular/core';
import { IProjects } from '../shared/global.model';
import projects from '../shared/site-content/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projectContents: Array<IProjects>;

  constructor() {
    this.projectContents = projects;
  }

  trackById(index: number, item: IProjects) {
    return index + item.id;
  }

  updateShowMoreContentForProject(project: IProjects): void {
    project.showMoreContent = !project.showMoreContent;
  }

}
