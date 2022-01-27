import { PAGEURL, PAGENAME } from '../global.model';

const navigation = [{
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
}];

export default navigation;
