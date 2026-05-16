const photo4 = 'assets/images/photos/4.jpg';
const photo5 = 'assets/images/photos/5.jpg';
const photo8 = 'assets/images/photos/8.jpg';
const photo3 = 'assets/images/photos/3.jpg';


export type FeatureType = {
  icon: string;
  title: string;
  description: string;
  duration: number;
};

export const featureData: FeatureType[] = [
  {
    icon: 'solar:compass-bold-duotone',
    title: 'Relocation Support',
    description: "We'll help to move and get settled and handle the visa process for you",
    duration: 300,
  },
  {
    icon: 'solar:layers-bold-duotone',
    title: 'Technology',
    description: 'A special training to get start with our technical stack by professionals',
    duration: 300,
  },
  {
    icon: 'solar:euro-bold-duotone',
    title: 'Growth budget',
    description:
      'A specific budget for your professionals growth which you spend on throughout the year',
    duration: 600,
  },
  {
    icon: 'solar:users-group-two-rounded-bold-duotone',
    title: 'Team activities & retreats',
    description: "Many team building activities and retreat every quarter, so you don't get bored",
    duration: 600,
  },
  {
    icon: 'solar:map-point-bold-duotone',
    title: 'Work from anywhere',
    description: 'Work from anywhere you like. We offer remote working to all the employees',
    duration: 900,
  },
  {
    icon: 'solar:trash-bin-trash-bold-duotone',
    title: 'Work/life balance',
    description:
      'Flexible work hours gives you complete balance with your personal and professional life.',
    duration: 900,
  },
];

export const cultureData: string[] = [photo4, photo5, photo8, photo3];

export type JobItem = {
  title: string;
  location: string;
};

export type JobCategory = {
  category: string;
  jobs: JobItem[];
};

export const jobData: JobCategory[] = [
  {
    category: 'Engineering',
    jobs: [
      {
        title: 'Techical Support Engineer',
        location: 'Remote',
      },
      {
        title: 'Senior Software Engineer (Frontend)',
        location: 'Remote',
      },
      {
        title: 'Senior Software Engineer (Backend)',
        location: 'Remote',
      },
      {
        title: 'Engineering Manager',
        location: 'Remote',
      },
    ],
  },
  {
    category: 'Marketing',
    jobs: [
      {
        title: 'Junior copywriter/editor',
        location: 'Remote',
      },
    ],
  },
];


export type InfoType = {
  title: string;
  description: string;
  buttonText: string;
};

export const infoData: InfoType[] = [
  {
    title: 'Get in touch',
    description:
      "Don't find suitable opening? We'd still love to learn more about you. Contact us and we'll reach out to have interesting conversation!",
    buttonText: 'Contact Us',
  },
  {
    title: 'Meet the team',
    description:
      'Learn more about us and who all work at Prompt. You will get chance to work with everyone in the team.',
    buttonText: 'Contact Us',
  },
];
