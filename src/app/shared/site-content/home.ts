import { environment } from 'src/environments/environment';
import { IHomePage, ILocalization, Locale } from '../global.model';

const yearsOfExperience = new Date().getFullYear() - new Date('10/07/2015').getFullYear();

const introduction_en: IHomePage = {
  imageURL: environment.profileImage,
  title: 'Aakash Goplani',
  subtitle: 'Web and Hybrid Mobile App Dev',
  description: [
    `I am a Full Stack JavaScript Developer with ${yearsOfExperience} years of rich experience in developing Web Applications using Node and Angular. I am also experience in developing Hybrid Mobile Applications using Ionic.`
  ],
  socialHandles: [
    { title: 'E-Mail', url: environment.email },
    { title: 'Linkedin', url: environment.linkedin },
    { title: 'Twitter', url: environment.twitter },
    { title: 'Github', url: environment.github },
    { title: 'Stack Overflow', url: environment.stackoverflow },
    { title: 'Blog', url: environment.blog }
  ]
};

const introduction_hi: IHomePage = {
  imageURL: environment.profileImage,
  title: 'आकाश गोपलानी',
  subtitle: 'वेब और हाइब्रिड मोबाइल ऐप डेवलपर',
  description: [
    `मैं एक Full Stack JavaScript डेवलपर हूं, जिसके पास Node और Angular का उपयोग करके वेब एप्लिकेशन विकसित करने का ${yearsOfExperience} वर्षों का समृद्ध अनुभव है। मुझे Ionic का उपयोग करके हाइब्रिड मोबाइल एप्लिकेशन विकसित करने का भी अनुभव है।`
  ],
  socialHandles: [
    { title: 'ईमेल', url: environment.email },
    { title: 'लिंक्डइन', url: environment.linkedin },
    { title: 'ट्विटर', url: environment.twitter },
    { title: 'गिटहब', url: environment.github },
    { title: 'स्टैक ओवरफ़्लो', url: environment.stackoverflow },
    { title: 'ब्लॉग', url: environment.blog }
  ]
};

export const introduction: ILocalization<IHomePage> = {
  [Locale.en]: introduction_en,
  [Locale.hi]: introduction_hi
};
