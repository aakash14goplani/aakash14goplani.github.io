/* eslint-disable max-len */
import { IBlogsPage, ILocalization, Locale } from '../global.model';
import { environment } from 'src/environments/environment';

const blogsDataEn: Array<{ id: string, data: IBlogsPage }> = [
  {
    id: '1',
    data: {
      blogTitle: 'Oracle WebCenter Sites',
      description: [
        'For about 3 years (2016 - 2019) I got an opportunity to work on Content Management System using Oracle WebCenter Sites 11g.',
        'When I started my journey with Oracle WebCenter Sites 11.1.1.8 back in February 2016, there were no concrete tutorial available on internet. So with my years of experience I had decided to write my own blogs (basically code snippets) and also integrate great tips & tricks (that I found useful) from other blogs and bring them under one roof.'
      ],
      blogURL: environment.owcs_blog,
      blogButtonText: 'VISIT BLOG SITE'
    } as IBlogsPage
  },
  {
    id: '2',
    data: {
      blogTitle: 'Web Dev',
      description: [
        'I started working on JavaScript since early 2019. My first assignment was with Angular and ever since then I have been a huge fan of Angular. Over the time, I have also had an opportunity to work on Node.js (using Express.js and Nest.js), Ionic and Firebase.',
        'I write blogs mostly on Angular and JavaScript. Will be sharing my day-to-day learning experience here with the community.'
      ],
      blogURL: environment.blog,
      blogButtonText: 'VISIT BLOG SITE'
    } as IBlogsPage
  }
];

const blogsDataHi: Array<{ id: string, data: IBlogsPage }> = [
  {
    id: '1',
    data: {
      blogTitle: 'Oracle WebCenter Sites',
      description: [
        'लगभग 3 वर्षों (2016 - 2019) के लिए मुझे Oracle WebCenter Sites 11g का उपयोग करके material प्रबंधन प्रणाली पर काम करने का अवसर मिला।',
        'जब मैंने फरवरी 2016 में Oracle WebCenter Sites 11.1.1.8 के साथ अपनी यात्रा शुरू की, तो इंटरनेट पर कोई ठोस ट्यूटोरियल उपलब्ध नहीं था, हमारे पास केवल एक डेवलपर गाइड था। इसलिए अपने वर्षों के अनुभव के साथ मैंने अपने स्वयं के ब्लॉग (मूल रूप से कोड स्निपेट) लिखने का फैसला किया है और अन्य ब्लॉगों से बेहतरीन टिप्स और ट्रिक्स (जो मुझे उपयोगी लगे) को भी एकीकृत किया है और उन्हें एक छत के नीचे लाया है।'
      ],
      blogURL: environment.owcs_blog,
      blogButtonText: 'ब्लॉग साइट पर जाएँ'
    } as IBlogsPage
  },
  {
    id: '2',
    data: {
      blogTitle: 'वेब देव',
      description: [
        'मैंने 2019 की शुरुआत से JavaScript पर काम करना शुरू कर दिया था। मेरा पहला असाइनमेंट Angular के साथ था और तब से मैं Angular का बहुत बड़ा प्रशंसक रहा हूं। समय के साथ, मुझे Node.js (Express.js और Nest.js का उपयोग करके), Ionic और Firebase पर भी काम करने का अवसर मिला है।',
        'मैं अधिकतर Angular और JavaScript पर ब्लॉग लिखता हूँ। अपने दिन-प्रतिदिन के सीखने के अनुभव को यहां समुदाय के साथ साझा करूंगा।'
      ],
      blogURL: environment.blog,
      blogButtonText: 'ब्लॉग साइट पर जाएँ'
    } as IBlogsPage
  }
];

export const blogsData: ILocalization<Array<{ id: string, data: IBlogsPage }>> = {
  [Locale.en]: blogsDataEn,
  [Locale.hi]: blogsDataHi
};
