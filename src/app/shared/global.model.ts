export interface INavigation {
  icon: string;
  url: string;
  name: string;
}

export enum PAGENAME {
  HOME = 'HOME',
  SKILLS = 'SKILLS',
  EDUCATION = 'EDUCATION',
  WORK_EXPERIENCE = 'WORK EXPERIENCE',
  PROJECTS = 'PROJECTS',
  BLOGS = 'BLOGS',
  RESUME = 'RESUME'
}

export enum PAGENAME_HI {
  HOME = 'होमपेज',
  SKILLS = 'कौशल',
  EDUCATION = 'शिक्षा',
  WORK_EXPERIENCE = 'कार्य अनुभव',
  PROJECTS = 'परियोजनाओं',
  BLOGS = 'ब्लॉग',
  RESUME = 'संक्षिप्त विवरण'
}

export enum PAGEURL {
  HOME = '/home',
  SKILLS = '/skills',
  EDUCATION = '/education',
  WORK_EXPERIENCE = '/work-experience',
  PROJECTS = '/projects',
  BLOGS = '/blogs',
  RESUME = '#'
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
  percentage: string;
}

export interface ICompanyExperience {
  title?: string;
  startDate?: Date;
  endDate?: Date | null;
  location?: string;
  description?: Array<string>;
  showMoreContent?: boolean;
  isExpanded?: boolean;
  expandable: boolean;
  level: number;
  id: string;
}

export interface IHomePage {
  imageURL: string;
  title: string;
  subtitle: string;
  description: Array<string>;
  socialHandles: Array<{
    title: string;
    url: string;
  }>;
}

export interface ISkillsPage {
  techSkillHeadline: string;
  techContent: Array<ISkills>;
  tableColumnA: string;
  tableColumnB: string;
  softSkillHeadline: string;
  softContent: Array<string>;
  futureLearningHeadline: string;
  futureLearnContent: Array<string>;
}

export interface IEducationPage {
  educationHeadline: string;
  educationDetails: Array<IDegree>;
  certificationHeadline: string;
  certificationList: Array<ICertifications>;
  buttonText: string;
}

export interface IProjectsPage {
  title: string;
  content: Array<string>;
  link: string;
  tools: Array<string>;
  showMoreContent: boolean;
  id: string;
  buttonText: string;
}

export interface IBlogsPage {
  blogTitle: string;
  description: Array<string>;
  blogURL: string;
  blogButtonText: string;
}

export interface ILocalization<T> {
  en: T,
  hi: T
}

export enum SessionKey {
  THEME = 'theme',
  DIRECTION = 'direction',
  LANGUAGE = 'language'
}

export enum Locale {
  en = 'en',
  hi = 'hi'
}
