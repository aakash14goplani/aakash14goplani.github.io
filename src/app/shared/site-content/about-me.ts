import { ICertifications, IDegree, ISkills } from '../global.model';
import { environment } from '../../../environments/environment';

const educationDetails: Array<IDegree> = [
  {
    institute: 'Vivekanand Education Society\'s Institute Of Technology',
    degree: 'Bachelor of Engineering (B.E.)',
    speciality: 'Computer',
    duration: '2011 - 2015'
  },
  {
    institute: 'Smt. Chandibai Himatlal Manshukhani College',
    degree: 'High School Degree in Science',
    speciality: 'Science',
    duration: '2009 - 2011'
  },
  {
    institute: 'St. Thomas English School',
    degree: 'SSC Degree',
    speciality: 'High School/Secondary Certificate Programs',
    duration: '1997 - 2009'
  }
];

const skills: Array<ISkills> = [
  { experteise: 'Frontend', skills: 'JavaScript, Angular (2+), HTML, CSS, SCSS, jQuery' },
  { experteise: 'Backend', skills: 'TypeScript, Node, Express.js, Nest.js, Firebase, Java' },
  { experteise: 'Mobile', skills: 'Ionic' },
  { experteise: 'Content Management Systems', skills: 'Oracle WebCenter Sites (11g), Wordpress' },
  { experteise: 'Database', skills: 'MySQL, Firestore, MongoDB' },
  { experteise: 'Devops', skills: 'GitHub CI-CD, Jenkins, uDeploy' },
  { experteise: 'Cloud', skills: 'Fundamentals of AWS' },
  { experteise: 'IDE', skills: 'VSCode, Eclipse' }
];

const certificationList: Array<ICertifications> = [
  {
    name: 'CSS - The Complete Guide',
    organization: 'Udemy',
    issued: 'Oct 2021',
    url: environment.css_certificate
  },
  {
    name: 'AWS Certified Developer - Associate',
    organization: 'Udemy',
    issued: 'Aug 2021',
    url: environment.aws_certificate
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    organization: 'Udemy',
    issued: 'Feb 2021',
    url: environment.azure_certificate
  },
  {
    name: 'Angular - The Complete Guide',
    organization: 'Udemy',
    issued: 'April 2020',
    url: environment.angular_certificate
  },
  {
    name: 'Oracle Certified Professional, Java SE 8 Programmer',
    organization: 'Oracle',
    issued: 'July 2019',
    url: environment.ocpjp_certificate
  },
  {
    name: 'Oracle Certified Associate, Java SE 8 Programmer',
    organization: 'Oracle',
    issued: 'May 2018',
    url: environment.ocajp_certificate
  }
];

const futureLearningSkills = ['Web3', 'Blockchain', 'Focusing more on Cloud', 'Better at System Designing', 'Better at DSA', 'Better at designing systems using Micro-frontends & Monorepos'];

export const data = {
  educationDetails,
  skills,
  certificationList,
  futureLearningSkills
};
