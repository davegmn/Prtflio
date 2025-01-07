import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Homes',
      url: getPermalink('home'),
    },

    {
      text: 'Get to know me',
      links: [
        {
          text: 'About me',
          href: getPermalink('/about'),
        },
    
      ],
    },

    {
      text: 'Contact me',
      links: [
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
      
      ],
    },
    
    {
      text: 'Widgets',
      href: '#',
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  
  
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> Dave Gonzalez</a> · All rights reserved.
  `,
};
