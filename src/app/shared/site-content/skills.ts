import { ILocalization, ISkills, ISkillsPage, Locale } from '../global.model';

const technicalSkills: Array<ISkills> = [
  { expertise: 'Frontend', skills: 'JavaScript, Angular (2+), HTML, CSS, SCSS, jQuery' },
  { expertise: 'Backend', skills: 'TypeScript, Node, Express.js, Nest.js, Firebase, Java' },
  { expertise: 'Mobile', skills: 'Ionic' },
  { expertise: 'Content Management Systems', skills: 'Oracle WebCenter Sites (11g), Wordpress' },
  { expertise: 'Database', skills: 'MySQL, Firestore, MongoDB' },
  { expertise: 'DevOps', skills: 'GitHub CI-CD, Jenkins, uDeploy' },
  { expertise: 'Cloud', skills: 'Fundamentals of AWS' },
  { expertise: 'IDE', skills: 'VSCode, Eclipse' }
];

const softSkills: Array<string> = [
  'Verbal and Written Communication',
  'Teamwork',
  'Problem-solving',
  'Adaptability',
  'Work Ethic',
  'Attention to Detail',
  'Interpersonal skill'
];

const futureLearningSkills: Array<string> = [
  'Web3',
  'Blockchain',
  'Focusing more on Cloud',
  'Better at System Designing',
  'Better at DSA',
  'Better at designing systems using Micro-frontends & Monorepos',
  'Time Management',
  'Patience',
  'Leadership'
];

const softSkillsHi: Array<string> = [
  'मौखिक और लिखित संचार',
  'टीम वर्क',
  'समस्या को सुलझाना',
  'अनुकूलन क्षमता',
  'कार्य नीति',
  'विस्तार पर ध्यान',
  'अन्तर्वैक्तिक कुशलता'
];

const futureLearningSkillsHi: Array<string> = [
  'वेब3',
  'ब्लॉकचेन',
  'क्लाउड पर अधिक ध्यान केंद्रित करना',
  'सिस्टम डिजाइनिंग में बेहतर',
  'डीएसए में बेहतर',
  'माइक्रो-फ्रंटएंड और मोनोरपोस का उपयोग करके सिस्टम डिजाइन करने में बेहतर',
  'समय प्रबंधन',
  'धैर्य',
  'नेतृत्व'
];

const skillsDataEn: ISkillsPage = {
  techSkillHeadline: 'Tech Stack',
  techContent: technicalSkills,
  tableColumnA: 'Expertise',
  tableColumnB: 'Skills',
  softSkillHeadline: 'Soft Skills',
  softContent: softSkills,
  futureLearningHeadline: 'Future Learning Aspirations',
  futureLearnContent: futureLearningSkills
};

const skillsDataHi: ISkillsPage = {
  techSkillHeadline: 'टेक स्टैक',
  techContent: technicalSkills,
  tableColumnA: 'विशेषज्ञता',
  tableColumnB: 'कौशल',
  softSkillHeadline: 'सॉफ्ट स्किल्स',
  softContent: softSkillsHi,
  futureLearningHeadline: 'भविष्य में सीखने की आकांक्षाएं',
  futureLearnContent: futureLearningSkillsHi
};

export const skillsPageData: ILocalization<ISkillsPage> = {
  [Locale.en]: skillsDataEn,
  [Locale.hi]: skillsDataHi
};
