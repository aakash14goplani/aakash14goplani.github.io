import { ICompanyExperience } from '../global.model';

const workExperience: Array<ICompanyExperience> = [{
  title: 'Accenture',
  startDate: new Date('10/07/2015'),
  endDate: null,
  expandable: true,
  level: 0,
  isExpanded: true,
  id: '01'
}, {
  title: 'Team Lead',
  startDate: new Date('06/01/2021'),
  endDate: null,
  location: 'Mumbai, India',
  expandable: true,
  level: 1,
  id: '11'
}, {
  description: [
    'Leading the team of 3 Junior resources in maintaining and upgrading Angular projects.',
    'Worked on multiple performance improvement and material UX designing.',
    'Worked on POCs to optimize content loading using PWA and Servie Workers.',
    'Acted as SME in Angular and consulted multiple projects across Accenture Didgital space.',
    'Conducted various training sessions in Angular to cross skill resources on Angular.'
  ],
  showMoreContent: false,
  expandable: false,
  level: 2,
  id: '21'
}, {
  title: 'Senior Analyst',
  startDate: new Date('12/01/2018'),
  endDate: new Date('05/31/2021'),
  location: 'Mumbai, India',
  expandable: true,
  level: 1,
  id: '12'
}, {
  description: [
    'Consulted client on revamping and migarting sites build with JSPs and JSFs to Angular.',
    'Worked on planning and creating Components, Templates, Directives, Pipes and Services.',
    'Designed strategies in creating Guards and Resolvers.',
    'Implemented best practices and brought up performance by 47%.',
    'Improved code coverage using Jasmine and Karma to 90%.',
    'Participated in various Hackathons, POCs and meetups around Angular space.'
  ],
  showMoreContent: false,
  expandable: false,
  level: 2,
  id: '22'
}, {
  title: 'Analyst',
  startDate: new Date('12/01/2016'),
  endDate: new Date('11/30/2018'),
  location: 'Mumbai, India',
  expandable: true,
  level: 1,
  id: '13'
}, {
  description: [
    'Consulated client in revamping 6 sites from scratch and integrating them with OWCS.',
    'Worked on rendering assets in Oracle WebCenter Sites.',
    'Used OWCS recommendation Engage engine to display customize contents based on user attributes.',
    'Created a utility to render assets (basic and flex) programatically.',
    'Participated in various assets publishing workflows.',
    'Conducted cross skill trainings in Accenture for OWCS.'
  ],
  showMoreContent: false,
  expandable: false,
  level: 2,
  id: '23'
}, {
  title: 'Associate',
  startDate: new Date('10/07/2015'),
  endDate: new Date('11/30/2016'),
  location: 'Mumbai, India',
  expandable: true,
  level: 1,
  id: '14'
}, {
  description: [
    'Worked on creating static pages using HTML, CSS and jQuery.',
    'Performed unit testing and participated with team in end-to-end system testing.',
    'Designed Basic, Flex and Recommendation assets in Oracle WebCenter Sites.'
  ],
  showMoreContent: false,
  expandable: false,
  level: 2,
  id: '24'
}];

export default workExperience;
