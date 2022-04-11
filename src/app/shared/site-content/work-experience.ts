import { ICompanyExperience, ILocalization, Locale } from '../global.model';

const workExperienceEn: Array<{ id: string, data: { 0: ICompanyExperience[] } }> = [
  {
    id: '',
    data: {
      0: [
        {
          title: 'Accenture',
          startDate: new Date('10/07/2015'),
          endDate: null,
          expandable: true,
          level: 0,
          isExpanded: true,
          levelId: '00'
        }, {
          title: 'Team Lead',
          startDate: new Date('06/01/2021'),
          endDate: null,
          location: 'Mumbai, India',
          expandable: true,
          level: 1,
          levelId: '04'
        }, {
          description: [
            'Leading the team of 3 Junior resources in maintaining and upgrading Angular projects.',
            'Worked on multiple performance improvement and material UX designing.',
            'Worked on POCs to optimize content loading using PWA and Service Workers.',
            'Acted as SME in Angular and consulted multiple projects across Accenture Digital space.',
            'Conducted various training sessions in Angular to cross skill resources on Angular.'
          ],
          showMoreContent: false,
          expandable: false,
          level: 2,
          levelId: '04'
        }, {
          title: 'Senior Analyst',
          startDate: new Date('12/01/2018'),
          endDate: new Date('05/31/2021'),
          location: 'Mumbai, India',
          expandable: true,
          level: 1,
          levelId: '03'
        }, {
          description: [
            'Consulted client on revamping and migrating sites build with JSPs and JSFs to Angular.',
            'Worked on planning and creating Components, Templates, Directives, Pipes and Services.',
            'Designed strategies in creating Guards and Resolvers.',
            'Implemented best practices and brought up performance by 47%.',
            'Improved code coverage using Jasmine and Karma to 90%.',
            'Participated in various Hackathons, POCs and meetups around Angular space.'
          ],
          showMoreContent: false,
          expandable: false,
          level: 2,
          levelId: '03'
        }, {
          title: 'Analyst',
          startDate: new Date('12/01/2016'),
          endDate: new Date('11/30/2018'),
          location: 'Mumbai, India',
          expandable: true,
          level: 1,
          levelId: '02'
        }, {
          description: [
            'Consulted client in revamping 6 sites from scratch and integrating them with OWCS.',
            'Worked on rendering assets in Oracle WebCenter Sites.',
            'Used OWCS recommendation Engage engine to display customize contents based on user attributes.',
            'Created a utility to render assets (basic and flex) programmatically.',
            'Participated in various assets publishing workflows.',
            'Conducted cross skill trainings in Accenture for OWCS.'
          ],
          showMoreContent: false,
          expandable: false,
          level: 2,
          levelId: '02'
        }, {
          title: 'Associate',
          startDate: new Date('10/07/2015'),
          endDate: new Date('11/30/2016'),
          location: 'Mumbai, India',
          expandable: true,
          level: 1,
          levelId: '01'
        }, {
          description: [
            'Worked on creating static pages using HTML, CSS and jQuery.',
            'Performed unit testing and participated with team in end-to-end system testing.',
            'Designed Basic, Flex and Recommendation assets in Oracle WebCenter Sites.'
          ],
          showMoreContent: false,
          expandable: false,
          level: 2,
          levelId: '01'
        }
      ]
    }
  }
];

const workExperienceHi: Array<{ id: string, data: { 0: ICompanyExperience[] } }> = [
  {
    id: '',
    data: {
      0: [
        {
          title: 'एक्सेंचर',
          startDate: new Date('10/07/2015'),
          endDate: null,
          expandable: true,
          level: 0,
          isExpanded: true,
          levelId: '00'
        }, {
          title: 'टीम लीडर',
          startDate: new Date('06/01/2021'),
          endDate: null,
          location: 'मुंबई, भारत',
          expandable: true,
          level: 1,
          levelId: '04'
        }, {
          description: [
            'Angular परियोजनाओं के रखरखाव और उन्नयन में 3 जूनियर संसाधनों की टीम का नेतृत्व करना।',
            'कई प्रदर्शन सुधार और material UX डिजाइनिंग पर काम किया।',
            'PWA और Service Workers का उपयोग करके content loading को अनुकूलित करने के लिए पीओसी पर काम किया।',
            'Angular में विषय विशेषज्ञ के रूप में काम किया और एक्सेंचर डिजिटल स्पेस में कई परियोजनाओं से परामर्श किया।',
            'Angular पर कौशल संसाधनों को पार करने के लिए Angular में विभिन्न प्रशिक्षण सत्रों का आयोजन किया।'
          ],
          showMoreContent: false,
          expandable: false,
          level: 2,
          levelId: '04'
        }, {
          title: 'वरिष्ठ सॉफ़्टवेयर इंजीनियर',
          startDate: new Date('12/01/2018'),
          endDate: new Date('05/31/2021'),
          location: 'मुंबई, भारत',
          expandable: true,
          level: 1,
          levelId: '03'
        }, {
          description: [
            'JSP और JSF के साथ Angular में निर्मित साइटों में सुधार और माइग्रेट करने पर परामर्शदाता क्लाइंट।',
            'Components, Templates, Directives, Pipes and Services की योजना बनाने पर काम किया।',
            'Guards and Resolvers बनाने के लिए रणनीति तैयार की।',
            'सर्वोत्तम प्रथाओं को लागू किया और प्रदर्शन में 47% की वृद्धि की।',
            'Jasmine और Karma का उपयोग करके 90% तक बेहतर कोड कवरेज।',
            'Angular स्पेस के आसपास विभिन्न हैकथॉन, पीओसी और मीटअप में भाग लिया।'
          ],
          showMoreContent: false,
          expandable: false,
          level: 2,
          levelId: '03'
        }, {
          title: 'सॉफ्टवेयर इंजीनियर',
          startDate: new Date('12/01/2016'),
          endDate: new Date('11/30/2018'),
          location: 'मुंबई, भारत',
          expandable: true,
          level: 1,
          levelId: '02'
        }, {
          description: [
            'शुरू से 6 साइटों को नया रूप देने और उन्हें OWCS के साथ एकीकृत करने के लिए क्लाइंट से परामर्श किया।',
            'Oracle WebCenter Sites में assets प्रदान करने पर काम किया।',
            'उपयोगकर्ता विशेषताओं के आधार पर अनुकूलित material प्रदर्शित करने के लिए OWCS Recommendation Engage इंजन का उपयोग किया।',
            'प्रोग्रामिक रूप से assets (basic and flex) प्रस्तुत करने के लिए एक उपयोगिता बनाई गई।',
            'वर्कफ़्लो प्रकाशित करने वाली विभिन्न संपत्तियों में भाग लिया।',
            'OWCS के लिए एक्सेंचर में क्रॉस स्किल प्रशिक्षण आयोजित किया।'
          ],
          showMoreContent: false,
          expandable: false,
          level: 2,
          levelId: '02'
        }, {
          title: 'जूनियर सॉफ्टवेयर इंजीनियर',
          startDate: new Date('10/07/2015'),
          endDate: new Date('11/30/2016'),
          location: 'मुंबई, भारत',
          expandable: true,
          level: 1,
          levelId: '01'
        }, {
          description: [
            'HTML, CSS और jQuery का उपयोग करके स्थिर पृष्ठ बनाने पर काम किया।',
            'यूनिट परीक्षण किया और एंड-टू-एंड सिस्टम परीक्षण में टीम के साथ भाग लिया।',
            'Oracle WebCenter Sites में डिज़ाइन की गई Basic, Flex और Recommendation assets।'
          ],
          showMoreContent: false,
          expandable: false,
          level: 2,
          levelId: '01'
        }
      ]
    }
  }
];

export const workExperience: ILocalization<Array<{ id: string, data: { 0: ICompanyExperience[] } }>> = {
  [Locale.en]: workExperienceEn,
  [Locale.hi]: workExperienceHi
};
