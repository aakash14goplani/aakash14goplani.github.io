import { PAGEURL, PAGENAME, PAGENAME_HI, ILocalization, INavigation, Locale } from '../global.model';

const navigation_en: { [key: number]: INavigation[] } = {
  0: [{
    icon: 'home',
    url: PAGEURL.HOME,
    name: PAGENAME.HOME
  }, {
    icon: 'skills',
    url: PAGEURL.SKILLS,
    name: PAGENAME.SKILLS
  }, {
    icon: 'education',
    url: PAGEURL.EDUCATION,
    name: PAGENAME.EDUCATION
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
  }, {
    icon: 'resume',
    url: PAGEURL.RESUME,
    name: PAGENAME.RESUME + ' DOWNLOAD'
  }]
};

const navigation_hi: { [key: number]: INavigation[] } = {
  0: [{
    icon: 'home',
    url: PAGEURL.HOME,
    name: PAGENAME_HI.HOME
  }, {
    icon: 'skills',
    url: PAGEURL.SKILLS,
    name: PAGENAME_HI.SKILLS
  }, {
    icon: 'education',
    url: PAGEURL.EDUCATION,
    name: PAGENAME_HI.EDUCATION
  }, {
    icon: 'experience',
    url: PAGEURL.WORK_EXPERIENCE,
    name: PAGENAME_HI.WORK_EXPERIENCE
  }, {
    icon: 'projects',
    url: PAGEURL.PROJECTS,
    name: PAGENAME_HI.PROJECTS
  }, {
    icon: 'blogs',
    url: PAGEURL.BLOGS,
    name: PAGENAME_HI.BLOGS
  }, {
    icon: 'resume',
    url: PAGEURL.RESUME,
    name: PAGENAME_HI.RESUME + ' डाउनलोड'
  }]
};

export const navigation: ILocalization<{ [key: number]: INavigation[]; }> = {
  [Locale.en]: navigation_en,
  [Locale.hi]: navigation_hi
};
