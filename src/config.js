module.exports = {
  siteTitle: 'Yovin Yahathugoda | Electronic Engineer',
  siteDescription:
    'Yovin Yahathugoda is an Electronic Engineer based in Colombo, Sri Lanka with experience in R&D and Deep Learning/Machine Learning.',
  siteKeywords:
    'Yovin Yahathugoda, Yahathugoda, Yovin, electronic engineer, research engineer, computer vision, python, sri lanka, deep learning, machine learning, kaggle, research, development, john keells research, data science, pytorch, sheffield hallam university, keras',
  siteUrl: 'https://www.yovinyahathugoda.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-173999919-1',
  googleVerification: 'Cu-5UJyYhs4cGVrBX6ZFGtUvvOA4c5HhiBzy121vLA8',
  name: 'Yovin Yahathugoda',
  location: 'Colombo, Sri Lanka',
  email: 'yovin.yahathugoda@gmail.com',
  github: 'https://github.com/yoviny/Deep-learning-Competitions',
  twitterHandle: '@YovinRY',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/yoviny/Deep-learning-Competitions',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/yovin-yahathugoda-905760136/',
    },
//     {
//       name: 'Codepen',
//       url: '',
//     },
//     {
//       name: 'Instagram',
//       url: '',
//     },
    {
      name: 'Twitter',
      url: 'https://twitter.com/YovinRY',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
