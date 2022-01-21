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
  type: string;
}

export interface ISkills {
  experteise: string;
  skills: string;
}

export interface ICertifications {
  name: string;
  organization: string;
  issued: string;
  url: string;
}

export interface IDegree {
  institute: string;
  degree: string;
  speciality: string;
  duration: string;
}

export interface CompanyExperience {
  title?: string;
  startDate?: Date;
  endDate?: Date | null;
  location?: string;
  description?: string;
  isExpanded?: boolean;
  expandable: boolean;
  level: number;
  id: string;
}
