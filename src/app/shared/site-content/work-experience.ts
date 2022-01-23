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
  description: ['Will hold mostly description on TL', 'Will hold mostly description on TL', 'Will hold mostly description on TL', 'Will hold mostly description on TL'],
  showMoreContent: false,
  expandable: false,
  level: 2,
  id: '21'
}, {
  title: 'Senior Analyst',
  startDate: new Date('12/01/2018'),
  endDate: new Date('05/31/2020'),
  location: 'Mumbai, India',
  description: [''],
  expandable: true,
  level: 1,
  id: '12'
}, {
  description: ['Will hold mostly description on SSE', 'Will hold mostly description on SSE', 'Will hold mostly description on SSE'],
  showMoreContent: false,
  expandable: false,
  level: 2,
  id: '22'
}, {
  title: 'Analyst',
  startDate: new Date('12/01/2016'),
  endDate: new Date('11/30/2018'),
  location: 'Mumbai, India',
  description: [''],
  expandable: true,
  level: 1,
  id: '13'
}, {
  description: ['Will hold mostly description on SE', 'Will hold mostly description on SE'],
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
  description: ['Will hold mostly description on ASE'],
  showMoreContent: false,
  expandable: false,
  level: 2,
  id: '24'
}];

export default workExperience;
