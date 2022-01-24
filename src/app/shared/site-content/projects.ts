import { environment } from 'src/environments/environment';
import { IProjects } from '../global.model';

const projects: Array<IProjects> = [{
  title: 'Angular Awesome Snippets',
  content: [
    'Sharing Cool snippets on Angular',
    'Configuring Modals and Alerts using Dynamic Components in Angular',
    'Manage list of supported browsers for your application in Angular',
    'Angular Dynamic Form Validation - Template and Reactive Forms',
    'Router Reuse Strategy',
    'Read more about this project on GitHub'
  ],
  link: environment.project_angular_snippet,
  tools: ['Angular'],
  showMoreContent: false,
  id: '1'
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
  id: '2'
}, {
  title: 'Post Management: Reactive Angular',
  content: [
    'his is a side project created by following tutorial RxJS in Angular: Reactive Development by Deborah Kurata.',
    'It covers topics like How to use RxJs, async pipes, flattening operators and many more...',
    'Read more about this project on GitHub'
  ],
  link: environment.project_angular_reactive,
  tools: ['Angular', 'RxJs'],
  showMoreContent: false,
  id: '3'
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
  id: '4'
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
  id: '5'
}, {
  title: 'Contact Book: Angular Material',
  content: [
    'This is a dummy project created while I was learning Angular Material (from Pluralsight by Ajden Towfeek)',
    'This project covers almost all of Componenst provided by Angular Material like Card, Button, List, Icon etc.',
    'Read more about this project on GitHub'
  ],
  link: environment.project_angular_material,
  tools: ['Angular', 'Material'],
  showMoreContent: false,
  id: '6'
}, {
  title: 'Web Hoisting Site: CSS and SCSS',
  content: [
    'Aim was to learn CSS in depth. Example practiced and concepts learn in this project were from udemy course by Maximilian Schwarzmüller',
    'The learnig process was divided into threee sections: Basic Level, Intermediate Level and Advance Level',
    'Naming conventions followed in this tutorial is BEM model.',
    'Read more about this project on GitHub'
  ],
  link: environment.project_css,
  tools: ['CSS', 'SCSS', 'Flexbox', 'Grid'],
  showMoreContent: false,
  id: '7'
}, {
  title: 'Shooping Cart: Learning Node and GraphQL',
  content: [
    'Learning fundamentals of NodeJs (using ExpressJs) and GraphQL from udemy course by Maximilian Schwarzmüller',
    'Project covers how to use NodeJs, Configure project with ExpressJs, Using REST API and then using GraphQL',
    'Read more about this project on GitHub'
  ],
  link: environment.project_nodejs,
  tools: ['NodeJs', 'ExpressJs', 'REST', 'GraphQL'],
  showMoreContent: false,
  id: '8'
}];

export default projects;
