import { environment } from 'src/environments/environment';
import { ILocalization, IProjectsPage, Locale } from '../global.model';

const projects_en: Array<IProjectsPage> = [{
  title: 'Angular Awesome Snippets',
  content: [
    'Sharing Cool snippets in Angular',
    'Configuring Modals and Alerts using Dynamic Components in Angular',
    'Manage list of supported browsers for your application in Angular',
    'Angular Dynamic Form Validation - Template and Reactive Forms',
    'Router Reuse Strategy',
    'Read more about this project on GitHub'
  ],
  link: environment.project_angular_snippet,
  tools: ['Angular'],
  showMoreContent: false,
  id: '1',
  buttonText: 'GitHub'
}, {
  title: 'Books Management: Angular NgRx',
  content: [
    'This is the side project that was created by following ng-conf Hardwired Workshop: Learn NgRX from the Creators of NgRX.',
    'It covers topics like Selectors, Actions, Reducers, Effects, Entity, Meta-Reducers and many more...',
    'Read more about this project on GitHub'
  ],
  link: environment.project_angular_ngrx,
  tools: ['Angular', 'NgRx', 'immer'],
  showMoreContent: false,
  id: '2',
  buttonText: 'GitHub'
}, {
  title: 'Post Management: Reactive Angular',
  content: [
    'This is a side project created by following tutorial RxJS in Angular: Reactive Development by Deborah Kurata.',
    'It covers topics like How to use RxJs, async pipes, flattening operators and many more...',
    'Read more about this project on GitHub'
  ],
  link: environment.project_angular_reactive,
  tools: ['Angular', 'RxJs'],
  showMoreContent: false,
  id: '3',
  buttonText: 'GitHub'
}, {
  title: 'Recipe: Learning Angular',
  content: [
    'This is a dummy project created while I was learning Angular course from Udemy titled as Angular - The Complete Guide.',
    'This covers wide variety of Angular concepts starting from basics to more complex parts.',
    'Read more about this project on GitHub'
  ],
  link: environment.project_angular_practice,
  tools: ['Angular'],
  showMoreContent: false,
  id: '4',
  buttonText: 'GitHub'
}, {
  title: 'Unit Testing in Angular',
  content: [
    'Learning Fundamentals of Unit testing using Karma and Jasmine in Angular',
    'Strategies to optimize and speed up testing',
    'Configuring karma with different options and adding third party dependencies',
    'Read more about this project on GitHub'
  ],
  link: environment.project_angular_testing,
  tools: ['Angular', 'Jasmine', 'Karma'],
  showMoreContent: false,
  id: '5',
  buttonText: 'GitHub'
}, {
  title: 'Contact Book: Angular Material',
  content: [
    'This is a dummy project created while I was learning Angular Material (from Pluralsight by Ajden Towfeek)',
    'This project covers almost all of Components provided by Angular Material like Card, Button, List, Icon etc.',
    'Read more about this project on GitHub'
  ],
  link: environment.project_angular_material,
  tools: ['Angular', 'Material'],
  showMoreContent: false,
  id: '6',
  buttonText: 'GitHub'
}, {
  title: 'Web Hosting Site: CSS and SCSS',
  content: [
    'Aim was to learn CSS in depth. Example practiced and concepts learn in this project were from Udemy course by Maximilian Schwarzmüller',
    'The learning process was divided into three sections: Basic Level, Intermediate Level and Advance Level',
    'Naming conventions followed in this tutorial is BEM model.',
    'Read more about this project on GitHub'
  ],
  link: environment.project_css,
  tools: ['CSS', 'SCSS', 'Flexbox', 'Grid'],
  showMoreContent: false,
  id: '7',
  buttonText: 'GitHub'
}, {
  title: 'Shopping Cart: Learning Node and GraphQL',
  content: [
    'Learning fundamentals of NodeJs (using ExpressJs) and GraphQL from Udemy course by Maximilian Schwarzmüller',
    'Project covers how to use NodeJs, Configure project with ExpressJs, Using REST API and then using GraphQL',
    'Read more about this project on GitHub'
  ],
  link: environment.project_nodejs,
  tools: ['NodeJs', 'ExpressJs', 'REST', 'GraphQL'],
  showMoreContent: false,
  id: '8',
  buttonText: 'GitHub'
}];

const projects_hi: Array<IProjectsPage> = [{
  title: 'Angular Awesome Snippets',
  content: [
    'Angular में कूल स्निपेट साझा करना',
    'Angular में Dynamic Components का उपयोग करके Modal और Alert को कॉन्फ़िगर करना',
    'Angular में अपने आवेदन के लिए समर्थित browsers की सूची प्रबंधित करें',
    'Angular Dynamic फार्म Validation - Template और Reactive फार्म',
    'Router Reuse Strategy',
    'GitHub पर इस प्रोजेक्ट के बारे में और पढ़ें'
  ],
  link: environment.project_angular_snippet,
  tools: ['Angular'],
  showMoreContent: false,
  id: '1',
  buttonText: 'GitHub'
}, {
  title: 'Books Management: Angular NgRx',
  content: [
    'यह एक साइड प्रोजेक्ट है जिसे ng-conf Hardwired Workshop: NgRX के क्रिएटर्स से NgRX सीखें का पालन करके बनाया गया था।',
    'इसमें Selectors, Actions, Reducers, Effects, Entity, Meta-Reducers और कई अन्य विषय शामिल हैं ...',
    'GitHub पर इस प्रोजेक्ट के बारे में और पढ़ें'
  ],
  link: environment.project_angular_ngrx,
  tools: ['Angular', 'NgRx', 'immer'],
  showMoreContent: false,
  id: '2',
  buttonText: 'GitHub'
}, {
  title: 'Post Management: Reactive Angular',
  content: [
    'यह एक साइड प्रोजेक्ट है जिसे निम्नलिखित ट्यूटोरियल RxJS in Angular: Reactive Development by Deborah Kurata द्वारा बनाया गया है।',
    'इसमें RxJs, async pipes, flattening operators और कई अन्य विषयों का उपयोग कैसे करें जैसे विषयों को शामिल किया गया है ...',
    'GitHub पर इस प्रोजेक्ट के बारे में और पढ़ें'
  ],
  link: environment.project_angular_reactive,
  tools: ['Angular', 'RxJs'],
  showMoreContent: false,
  id: '3',
  buttonText: 'GitHub'
}, {
  title: 'Recipe: Learning Angular',
  content: [
    'यह एक डमी प्रोजेक्ट है जिसे तब बनाया गया था जब मैं Udemy से Angular - The Complete Guide शीर्षक से Angular कोर्स सीख रहा था।',
    'इसमें बुनियादी से लेकर अधिक जटिल भागों तक शुरू होने वाली Angular अवधारणाओं की विस्तृत विविधता शामिल है।',
    'GitHub पर इस प्रोजेक्ट के बारे में और पढ़ें'
  ],
  link: environment.project_angular_practice,
  tools: ['Angular'],
  showMoreContent: false,
  id: '4',
  buttonText: 'GitHub'
}, {
  title: 'Unit Testing in Angular',
  content: [
    'Angular में Karma और Jasmine का उपयोग करके यूनिट परीक्षण के बुनियादी सिद्धांत सीखना',
    'परीक्षण को अनुकूलित और तेज करने की रणनीतियाँ',
    'विभिन्न विकल्पों के साथ Karma को कॉन्फ़िगर करना और 3rd party की निर्भरता को जोड़ना',
    'GitHub पर इस प्रोजेक्ट के बारे में और पढ़ें'
  ],
  link: environment.project_angular_testing,
  tools: ['Angular', 'Jasmine', 'Karma'],
  showMoreContent: false,
  id: '5',
  buttonText: 'GitHub'
}, {
  title: 'Contact Book: Angular Material',
  content: [
    'यह एक डमी प्रोजेक्ट है जिसे तब बनाया गया था जब मैं Angular Material सीख रहा था Pluralsight से Ajden Towfeek द्वारा',
    'इस परियोजना में Angular Material जैसे कार्ड, बटन, सूची, चिह्न आदि द्वारा प्रदान किए गए लगभग सभी घटकों को शामिल किया गया है।',
    'GitHub पर इस प्रोजेक्ट के बारे में और पढ़ें'
  ],
  link: environment.project_angular_material,
  tools: ['Angular', 'Material'],
  showMoreContent: false,
  id: '6',
  buttonText: 'GitHub'
}, {
  title: 'Web Hoisting Site: CSS and SCSS',
  content: [
    'उद्देश्य CSS को गहराई से सीखना था। उदाहरण अभ्यास और इस परियोजना में सीखी गई अवधारणाएं Maximilian Schwarzmüller द्वारा उडेमी पाठ्यक्रम से थीं',
    'सीखने की प्रक्रिया को तीन खंडों में विभाजित किया गया था: मूल स्तर, मध्यवर्ती स्तर और अग्रिम स्तर',
    'इस ट्यूटोरियल में अनुसरण की जाने वाली नामकरण परंपराएँ BEM मॉडल हैं।',
    'GitHub पर इस प्रोजेक्ट के बारे में और पढ़ें'
  ],
  link: environment.project_css,
  tools: ['CSS', 'SCSS', 'Flexbox', 'Grid'],
  showMoreContent: false,
  id: '7',
  buttonText: 'GitHub'
}, {
  title: 'Shooping Cart: Learning Node and GraphQL',
  content: [
    'Maximilian Schwarzmüller द्वारा Udemy पाठ्यक्रम से NodeJs (ExpressJs का उपयोग करके) और GraphQL के मूल सिद्धांतों को सीखना',
    'प्रोजेक्ट कवर करता है कि NodeJs का उपयोग कैसे करें, ExpressJs के साथ प्रोजेक्ट को कॉन्फ़िगर करें, REST API का उपयोग करें और फिर GraphQL का उपयोग करें',
    'GitHub पर इस प्रोजेक्ट के बारे में और पढ़ें'
  ],
  link: environment.project_nodejs,
  tools: ['NodeJs', 'ExpressJs', 'REST', 'GraphQL'],
  showMoreContent: false,
  id: '8',
  buttonText: 'GitHub'
}];

export const projects: ILocalization<Array<IProjectsPage>> = {
  [Locale.en]: projects_en,
  [Locale.hi]: projects_hi
};
