const app4 = 'assets/images/features/app4.png';
const app3 = 'assets/images/features/app3.png';
const img1 = 'assets/images/avatars/img-1.jpg';
const img2 = 'assets/images/avatars/img-2.jpg';

export type FeatureType = {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  iconColor: string;
}

export const featuresData: FeatureType[] = [
  {
    title: 'First feature',
    description:
      'We use a customized application tobe specifically designed a testing gnose to keep away for people.',
    icon: 'solar:letter-opened-bold-duotone',
    bgColor: 'bg-blue-100',
    iconColor: 'text-primary',
  },
  {
    title: 'Second feature',
    description:
      'In order to design a mobile app that is going to be module downloaded and accessed frequently by users.',
    icon: 'solar:shield-check-bold-duotone',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-500',
  },
  {
    title: 'Third feature',
    description:
      'A Private Limited is the most popular type of partnership Malta. The limited liabilityis',
    icon: 'solar:bolt-bold-duotone',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    title: 'Fourth feature',
    description:
      "Few derived into talking being in merit long you'd his the of to had the to duties, it them one...",
    icon: 'solar:notification-unread-bold-duotone',
    bgColor: 'bg-teal-100',
    iconColor: 'text-teal-500',
  },
];

export type FeatureType2 = {
  title: string;
  description: string;
  image: string;
  dots: {
    class: string;
  }[];
};

export const featuresData2: FeatureType2[] = [
  {
    title: 'Quick Access to Tasks',
    description:
      'Save time and edit like a pro! Yes! you will be able to edit your application on the easy way.',
    image: app4,
    dots: [
      {
        class: 'absolute h-3 w-3 rounded-full bg-pink-600 bottom-8',
      },
      {
        class: 'absolute h-3 w-3 rounded-full bg-yellow-300 top-32 end-12',
      },
    ],
  },
  {
    title: 'Create Task Easily',
    description:
      'Speedy App provides instant information on whit thousands of hire and buy products.',
    image: app3,
    dots: [
      {
        class: 'absolute h-3 w-3 rounded-full bg-red-400 bottom-8',
      },
      {
        class: 'absolute h-3 w-3 rounded-full bg-green-400 top-24 end-16',
      },
    ],
  },
  {
    title: 'Quick Access to Tasks',
    description:
      'Save time and edit like a pro! Yes! you will be able to edit your application on the easy way.',
    image: app4,
    dots: [
      {
        class: 'absolute h-3 w-3 rounded-full bg-purple-600 bottom-8 end-0',
      },
      {
        class: 'absolute h-3 w-3 rounded-full bg-orange-400 top-60',
      },
    ],
  },
];

export type TestimonialType = {
  text: string;
  image: string;
  name: string;
  role: string;
  rating: number;
};

export const testimonialData: TestimonialType[] = [
  {
    text: `Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.`,
    image: img1,
    name: 'John Stark',
    role: 'Engineering Director',
    rating: 5,
  },
  {
    text: `I was bad at front-end until I discovered with Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.`,
    image: img2,
    name: 'Cersei Lannister',
    role: 'Senior Project Manager',
    rating: 5,
  },
  {
    text: `Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.`,
    image: img1,
    name: 'John Stark',
    role: 'Engineering Director',
    rating: 5,
  },
  {
    text: `I was bad at front-end until I discovered with Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.`,
    image: img2,
    name: 'Cersei Lannister',
    role: 'Senior Project Manager',
    rating: 5,
  }
];
