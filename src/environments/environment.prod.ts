import secretKey from './secrets';

export const environment = {
  production: true,
  useEmulators: false,
  firebase: {
    apiKey: secretKey.firebase,
    authDomain: secretKey.firebaseAuthDomain,
    projectId: secretKey.firebaseProjectId,
    storageBucket: secretKey.firebaseStorageBucket,
    messagingSenderId: secretKey.firebaseMessagingSenderId,
    appId: secretKey.firebaseAppId,
    measurementId: secretKey.firebaseMeasurementId
  },
  profileImage: '../../assets/images/AakashImage.jpg',
  email: 'mailto:aakash.14.goplani@gmail.com',
  github: 'https://github.com/aakash14goplani',
  linkedin: 'https://www.linkedin.com/in/aakashgoplani/',
  twitter: 'https://twitter.com/aakashgoplani',
  stackoverflow: 'https://stackoverflow.com/users/3411606/aakash-goplani',
  blog: 'https://blog.aakashgoplani.in/',
  owcs_blog: 'https://aakashgoplani.in/OWCS/',
  css_certificate: 'https://www.udemy.com/certificate/UC-115b9b30-f380-4c38-8ca9-d8e7b672ab6d/',
  aws_certificate: 'https://www.credly.com/badges/903fd9da-eecf-4e80-9523-1d8f30654d63/public_url',
  azure_certificate: 'https://www.credly.com/badges/08629f46-02ec-48db-82ff-d7c4f649628c/public_url',
  angular_certificate: 'https://www.udemy.com/certificate/UC-7c1f5bd9-7d54-4a51-978e-182034af0a4d/',
  ocpjp_certificate: 'https://www.youracclaim.com/badges/0ad13351-cdbd-4bcd-b1a5-299123e4c38a/linked_in_profile',
  ocajp_certificate: 'https://www.youracclaim.com/badges/42443813-d280-4af5-8a5b-acabf7d64694/linked_in_profile',
  project_angular_snippet: 'https://github.com/aakash14goplani/AngularAwesomeSnippets',
  project_angular_ngrx: 'https://github.com/aakash14goplani/Angular-NgRx',
  project_angular_reactive: 'https://github.com/aakash14goplani/angular-reactive',
  project_angular_practice: 'https://github.com/aakash14goplani/AngularPractice',
  project_angular_testing: 'https://github.com/aakash14goplani/AngularTesting',
  project_angular_material: 'https://github.com/aakash14goplani/Angular-Material',
  project_css: 'https://github.com/aakash14goplani/CSS-In-Depth',
  project_nodejs: 'https://github.com/aakash14goplani/Node-Practice'
};
