import { ISkills } from '../global.model';

const technicalSkills: Array<ISkills> = [
  { experteise: 'Frontend', skills: 'JavaScript, Angular (2+), HTML, CSS, SCSS, jQuery' },
  { experteise: 'Backend', skills: 'TypeScript, Node, Express.js, Nest.js, Firebase, Java' },
  { experteise: 'Mobile', skills: 'Ionic' },
  { experteise: 'Content Management Systems', skills: 'Oracle WebCenter Sites (11g), Wordpress' },
  { experteise: 'Database', skills: 'MySQL, Firestore, MongoDB' },
  { experteise: 'Devops', skills: 'GitHub CI-CD, Jenkins, uDeploy' },
  { experteise: 'Cloud', skills: 'Fundamentals of AWS' },
  { experteise: 'IDE', skills: 'VSCode, Eclipse' }
];

const softSkills: Array<string> = ['Verbal and Written Communication', 'Teamwork', 'Problem-solving', 'Adaptability', 'Work Ethic', 'Attention to Detail', 'Interpersonal skill'];

const futureLearningSkills: Array<string> = ['Web3', 'Blockchain', 'Focusing more on Cloud', 'Better at System Designing', 'Better at DSA', 'Better at designing systems using Micro-frontends & Monorepos', 'Time Management', 'Patience', 'Leadership'];

export const skillsData = {
  technicalSkills,
  softSkills,
  futureLearningSkills
};
