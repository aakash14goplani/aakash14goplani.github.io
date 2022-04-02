import { ICertifications, IDegree, IEducationPage, ILocalization, Locale } from '../global.model';
import { environment } from '../../../environments/environment';

const educationDetails: Array<IDegree> = [
  {
    institute: 'Vivekanand Education Society\'s Institute Of Technology',
    degree: 'Bachelor of Engineering (B.E.)',
    specialty: 'Computer',
    duration: '2011 - 2015',
    percentage: '73%'
  },
  {
    institute: 'Smt. Chandibai Himatmal Mansukhani College',
    degree: 'High School Degree in Science',
    specialty: 'Science',
    duration: '2009 - 2011',
    percentage: '86%'
  },
  {
    institute: 'St. Thomas English School',
    degree: 'SSC Degree',
    specialty: 'School/Secondary Certificate Programs',
    duration: '1997 - 2009',
    percentage: '89%'
  }
];

const certificationList: Array<ICertifications> = [
  {
    name: 'Firebase & AngularFire In Depth',
    organization: 'Udemy',
    issued: 'March 2022',
    url: environment.firebase_certificate
  },
  {
    name: 'Progressive Web Apps (PWA) - The Complete Guide',
    organization: 'Udemy',
    issued: 'February 2022',
    url: environment.pwa_certificate
  },
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

const educationDetailsHi: Array<IDegree> = [
  {
    institute: 'विवेकानंद एजुकेशन सोसाइटी इंस्टीट्यूट ऑफ टेक्नोलॉजी',
    degree: 'बैचलर ऑफ इंजीनियरिंग (बी.ई.)',
    specialty: 'संगणक',
    duration: '2011 - 2015',
    percentage: '73%'
  },
  {
    institute: 'श्रीमती चंडीबाई हिम्मतलाल मनसुखानी कॉलेज',
    degree: 'विज्ञान में हाई स्कूल की डिग्री',
    specialty: 'विज्ञान',
    duration: '2009 - 2011',
    percentage: '86%'
  },
  {
    institute: 'सेंट थॉमस इंग्लिश स्कूल',
    degree: 'एस.एस.सी. डिग्री',
    specialty: 'स्कूल/माध्यमिक प्रमाणपत्र कार्यक्रम',
    duration: '1997 - 2009',
    percentage: '89%'
  }
];

const certificationListHi: Array<ICertifications> = [
  {
    name: 'Firebase & AngularFire In Depth',
    organization: 'Udemy',
    issued: 'मार्च 2022',
    url: environment.firebase_certificate
  },
  {
    name: 'Progressive Web Apps (PWA) - The Complete Guide',
    organization: 'Udemy',
    issued: 'फ़रवरी 2022',
    url: environment.pwa_certificate
  },
  {
    name: 'CSS - The Complete Guide',
    organization: 'Udemy',
    issued: 'अक्टूबर 2021',
    url: environment.css_certificate
  },
  {
    name: 'AWS Certified Developer - Associate',
    organization: 'Amazon',
    issued: 'अगस्त 2021',
    url: environment.aws_certificate
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    organization: 'Microsoft',
    issued: 'फ़रवरी 2021',
    url: environment.azure_certificate
  },
  {
    name: 'Angular - The Complete Guide',
    organization: 'Udemy',
    issued: 'अप्रैल 2020',
    url: environment.angular_certificate
  },
  {
    name: 'Oracle Certified Professional, Java SE 8 Programmer',
    organization: 'Oracle',
    issued: 'जुलाई 2019',
    url: environment.ocpjp_certificate
  },
  {
    name: 'Oracle Certified Associate, Java SE 8 Programmer',
    organization: 'Oracle',
    issued: 'मई 2018',
    url: environment.ocajp_certificate
  }
];

const detailsEn: IEducationPage = {
  educationHeadline: 'Education',
  educationDetails,
  certificationHeadline: 'Certifications',
  certificationList,
  buttonText: 'See Credentials'
};

const detailsHi: IEducationPage = {
  educationHeadline: 'शिक्षा',
  educationDetails: educationDetailsHi,
  certificationHeadline: 'प्रमाणपत्र',
  certificationList: certificationListHi,
  buttonText: 'क्रेडेंशियल देखें'
};

export const educationData: ILocalization<IEducationPage> = {
  [Locale.en]: detailsEn,
  [Locale.hi]: detailsHi
};
