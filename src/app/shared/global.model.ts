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
  expertise: string;
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
  description: string;
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
  id?: string;
  blogTitle: string;
  description: Array<string>;
  blogURL: string;
  blogButtonText: string;
}

export interface ILocalization<T> {
  en: T;
  hi: T;
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

export enum Collections {
  HOME = 'home_page',
  SKILLS = 'skills_page',
  EDUCATION = 'education_page',
  WORK_EXPERIENCE = 'work_experience_page',
  PROJECTS = 'projects_page',
  BLOGS = 'blogs_page',
  NAVIGATION = 'navigation',
  THEME = 'theme'
}

export enum Documents {
  HOME_PAGE_EN = 'home_page_en',
  HOME_PAGE_HI = 'home_page_hi',
  SKILLS_PAGE_EN = 'skills_page_en',
  SKILLS_PAGE_HI = 'skills_page_hi',
  EDUCATION_PAGE_EN = 'education_page_en',
  EDUCATION_PAGE_HI = 'education_page_hi',
  NAVIGATION_EN = 'navigation_en',
  NAVIGATION_HI = 'navigation_hi',
  PROJECTS_PAGE_EN = 'projects_page_en',
  PROJECTS_PAGE_HI = 'projects_page_hi',
  WORK_EXPERIENCE_PAGE_EN = 'work_experience_page_en',
  WORK_EXPERIENCE_PAGE_HI = 'work_experience_page_hi',
  BLOGS_PAGE_EN = 'blogs_page_en',
  BLOGS_PAGE_HI = 'blogs_page_hi'
}
