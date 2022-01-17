import { PAGEURL, PAGENAME } from '../global.model';

const navigation = [{
  icon: 'home',
  url: PAGEURL.HOME,
  name: PAGENAME.HOME
}, {
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

export default navigation;
