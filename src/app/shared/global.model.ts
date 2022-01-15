export interface INavigation {
  icon: string;
  url: string;
  name: string;
}

export enum PAGENAME {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  WORK_EXPERIENCE = 'WORK_EXPERIENCE',
  PROJECTS = 'PROJECTS',
  BLOGS = 'BLOGS'
}

export enum PAGEURL {
  HOME = '/home',
  ABOUT = '/about',
  WORK_EXPERIENCE = '/work-experience',
  PROJECTS = '/projects',
  BLOGS = '/blogs'
}
