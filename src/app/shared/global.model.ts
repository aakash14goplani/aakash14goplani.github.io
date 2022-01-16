export interface INavigation {
  icon: string;
  url: string;
  name: string;
}

export enum PAGENAME {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  WORK_EXPERIENCE = 'WORK EXPERIENCE',
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

export interface IThemes {
  backgroundColor: string;
  buttonColor: string;
  headingColor: string;
  label: string;
  value: string;
}
