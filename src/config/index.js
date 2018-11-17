module.exports = {
  siteTitle: '福建工程学院（鳝溪）技术共享 | Technology Sharing with FJUTer',
  siteDescription: '',
  siteKeywords: '',
  siteUrl: 'https://github.com/FJUT-STUDIO',
  siteLanguage: 'zh-CN',
  siteImage: 'https://github.com/FJUT-STUDIO',

  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: '易班',
  location: '福州，福建',
  email: 'https://github.com/FJUT-STUDIO',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/FJUT-STUDIO',
    },
  ],

  nav: [
    {
      name: 'void main();',
      url: '#',
    },
    {
      name: 'def about:',
      url: '#about',
    },
    {
      name: 'struct logs{}',
      url: '#jobs',
    },
    {
      name: '()=>{projects}',
      url: '#projects',
    },
    {
      name: 'interface contact',
      url: '#contact',
    },
  ],

  googleAnalyticsID: 'UA-129081388-1',

  headerHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',

  srConfig: (delay = 200) => {
    return {
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
    };
  },
};
