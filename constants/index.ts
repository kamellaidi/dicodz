



// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/', key: 'qui_sommes_nous', label: 'Qui sommes-nous ?' },
  { href: '/', key: 'lexique', label: 'Lexique' },
  { href: '/', key: 'recherche', label: 'Rechercher' },
  { href: '/', key: 'contact', label: 'Nous contacter'},
];

// DATA CARDS 

interface CardProps {
    title: string;
    imageSrc: string;
    text: string;
  }

export const cardsData: CardProps[] = [
    {
      title: "Titre de la Carte 1",
      imageSrc: "/boat.png",
      text: "lorem ipsum dolor sit amet consectetur adip eu fugiat null a ante  et dolore magna aliqu sapient et dolore magna aliqu sapient et dolore magna aliqu sapient et dolore magna aliqu sapient et dolore magna aliqu sapient et dolore magna aliqu sapient et dolore magna aliqu sapient et dolore magna aliqu sapient et d",
    },
    {
      title: "Titre de la Carte 2",
      imageSrc: "/boat.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Titre de la Carte 3",
      imageSrc: "/boat.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  
// export const features = [
//     {
//       name: 'Push to deploy',
//       description:
//         'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
//       icon: <CloudArrowUpIcon />,
//     },
//     {
//       name: 'SSL certificates',
//       description:
//         'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
//       icon: <LockClosedIcon />,
//     },
//     {
//       name: 'Simple queues',
//       description:
//         'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
//       icon: <ArrowPathIcon />,
//     },
//     {
//       name: 'Advanced security',
//       description:
//         'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
//       icon: <FingerPrintIcon />,
//     },
//   ];

// CAMP SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Real maps can be offline',
    icon: '/map.svg',
    variant: 'green',
    description:
      'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
  },
  {
    title: 'Set an adventure schedule',
    icon: '/calendar.svg',
    variant: 'green',
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: 'Technology using augment reality',
    icon: '/tech.svg',
    variant: 'green',
    description:
      'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
  },
  {
    title: 'Many new locations every month',
    icon: '/location.svg',
    variant: 'orange',
    description:
      'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'About Hilink',
      'Press Releases',
      'Environment',
      'Jobs',
      'Privacy Policy',
      'Contact Us',
    ],
  },
  {
    title: 'Our Community',
    links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Admin Officer', value: '123-456-7890' },
    { label: 'Email Officer', value: 'hilink@akinthil.com' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
    '/wordpress.svg',
  ],
};
