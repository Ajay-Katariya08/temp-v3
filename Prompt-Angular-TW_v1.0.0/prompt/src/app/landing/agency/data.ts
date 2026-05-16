const amazon = 'assets/images/brands/amazon.svg';
const google = 'assets/images/brands/google.svg';
const paypal = 'assets/images/brands/paypal.svg';
const spotify = 'assets/images/brands/spotify.svg';
const shopify = 'assets/images/brands/shopify.svg';
const agency1 = 'assets/images/features/agency1.jpg';
const agency2 = 'assets/images/features/agency2.jpg';
const coworking1 = 'assets/images/hero/coworking1.jpg';
const coworking2 = 'assets/images/hero/coworking2.png';
const coworking4 = 'assets/images/hero/coworking4.jpg';


export type ServiceType = {
  title: string;
  description: string;
  icon: string;
  bg: string;
  iconColor: string;
  aosDuration: string;
};

export const serviceData: ServiceType[] = [
  {
    title: 'User Experience Design',
    description:
      'Following the best process that a great design teams use to create products that provide meaningful and relevant experiences to users',
    icon: 'solar:pallete-2-bold-duotone',
    bg: 'bg-primary/20',
    iconColor: 'text-primary',
    aosDuration: '500',
  },
  {
    title: 'Front End Development',
    description:
      'Development of the websites for businesses of all sizes and shapes and covering a small to enterprise organizations',
    icon: 'solar:album-bold-duotone',
    bg: 'bg-orange-500/10',
    iconColor: 'text-orange-600',
    aosDuration: '700',
  },
  {
    title: 'Brand Identitty Design',
    description:
      'Making a new identities for your brand with an effective collaboration and considered design. We treat your brand like our own',
    icon: 'solar:settings-bold-duotone',
    bg: 'bg-green-500/10',
    iconColor: 'text-green-500',
    aosDuration: '900',
  },
];

export type ProjectType = {
  aosDuration: string;
  items: {
    title: string;
    category: string;
    image: string;
  }[];
};

export const projectData: ProjectType[] = [
  {
    aosDuration: '600',
    items: [
      {
        title: 'Project',
        category: 'Branding, Interaction, Web Design',
        image: agency1,
      },
      {
        title: 'Project 2',
        category: 'Branding, Web Design & Development',
        image: agency2,
      },
    ],
  },
  {
    aosDuration: '800',
    items: [
      {
        title: 'Project 3',
        category: 'Branding, Interaction, Web Design',
        image: agency2,
      },
      {
        title: 'Project 4',
        category: 'Branding, Web Design & Development',
        image: agency1,
      },
    ],
  },
];

export const clientData: string[] = [amazon, google, paypal, spotify, shopify];

export type BlogType = {
  category: string;
  categoryBg: string;
  image: string;
  date: string;
  title: string;
  description: string;
  aosDuration: string;
};

export const blogData: BlogType[] = [
  {
    category: 'Design',
    categoryBg: 'bg-black',
    image: coworking1,
    date: '11 March, 2020',
    title: 'Top 10 design inspirations to follow',
    description:
      "Single page websites are taking over the world, and that's why I would like you to present the best ...",
    aosDuration: '500',
  },
  {
    category: 'Development',
    categoryBg: 'bg-primary',
    image: coworking2,
    date: '12 March, 2020',
    title: 'Top 10 design inspirations to follow',
    description:
      'We have shortlisted the best WordPress themes for alcohol production, distribution, and selling to...',
    aosDuration: '700',
  },
  {
    category: 'Design',
    categoryBg: 'bg-black',
    image: coworking4,
    date: '13 March, 2020',
    title: 'Top 10 design inspirations to follow',
    description:
      'The following Italian restaurant WordPress themes come with the powerful drag-n-drop...',
    aosDuration: '900',
  },
];

export type JobType = {
  title: string;
  location: string;
  aosDuration: string;
  aosOnParent: boolean;
};

export const jobData: JobType[] = [
  {
    title: 'Front-End Developer',
    location: 'Los Angeles / Remote',
    aosDuration: '500',
    aosOnParent: true,
  },
  {
    title: 'Community Manager',
    location: 'New York / Full-Time',
    aosDuration: '700',
    aosOnParent: false,
  },
  {
    title: 'UX/UI Designer',
    location: 'New York / Full-Time',
    aosDuration: '900',
    aosOnParent: true,
  },
];

export const aboutData: string[] = ['Home', 'Portfolio', 'Resources', 'Blog'];

export const companyData: string[] = ['About', 'Career', 'Clients'];

export const socialLinkData: string[] = [
  'tabler:brand-facebook',
  'tabler:brand-x',
  'tabler:brand-instagram',
  'tabler:brand-linkedin',
];
