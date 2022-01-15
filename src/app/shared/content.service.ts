import { Injectable } from '@angular/core';
import { INavigation, PAGENAME, PAGEURL } from './global.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getContentForPage(pagename: PAGENAME): void { }

  getNavigationConfiguration(): Array<INavigation> {
    const navigationConfiguration: Array<INavigation> = [{
      icon: 'about',
      url: PAGEURL.ABOUT,
      name: PAGENAME.ABOUT
    }, {
      icon: 'experience',
      url: PAGEURL.WORK_EXPERIENCE,
      name: PAGENAME.WORK_EXPERIENCE
    }, {
      icon: 'projects',
      url: PAGEURL.PROJECTS,
      name: PAGENAME.PROJECTS
    }, {
      icon: 'blogs',
      url: PAGEURL.BLOGS,
      name: PAGENAME.BLOGS
    }];

    return navigationConfiguration;
  }
}
