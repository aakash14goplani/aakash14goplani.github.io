import { ICertifications, IDegree } from '../global.model';
import { environment } from '../../../environments/environment';

const educationDetails: Array<IDegree> = [
  {
    institute: 'Vivekanand Education Society\'s Institute Of Technology',
    degree: 'Bachelor of Engineering (B.E.)',
    speciality: 'Computer',
    duration: '2011 - 2015',
    percentage: '73%'
  },
  {
    institute: 'Smt. Chandibai Himatlal Manshukhani College',
    degree: 'High School Degree in Science',
    speciality: 'Science',
    duration: '2009 - 2011',
    percentage: '86%'
  },
  {
    institute: 'St. Thomas English School',
    degree: 'SSC Degree',
    speciality: 'School/Secondary Certificate Programs',
    duration: '1997 - 2009',
    percentage: '89%'
  }
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
    organization: 'Amazon',
    issued: 'Aug 2021',
    url: environment.aws_certificate
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    organization: 'Microsoft',
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

export const educationData = {
  educationDetails,
  certificationList
};
