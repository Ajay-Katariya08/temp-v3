const avatar1 = 'assets/images/avatars/img-1.jpg';
const avatar2 = 'assets/images/avatars/img-2.jpg';
const avatar3 = 'assets/images/avatars/img-3.jpg';
const google = 'assets/images/brands/google.svg';
const amazon = 'assets/images/brands/amazon.svg';
const lenovo = 'assets/images/brands/lenovo.svg';

export type FeatureType = {
  title: string;
  desc: string;
  icon: string;
  className: string;
  color: string;
  duration: number;
};

export const featureData: FeatureType[] = [
  {
    title: 'Automated Campaigns',
    desc: 'Praesent ipsum libero, sollicitudin elementum et, condimentum non augue.',
    icon: 'solar:letter-bold-duotone',
    className: 'bg-blue-500/10',
    color: 'text-blue-500',
    duration: 300,
  },
  {
    title: 'Business Analytics',
    desc: 'Mauris dapibus blandit hendrerit. Proin auctor est at bibendum faucibus sodales.',
    icon: 'solar:diagram-up-bold-duotone',
    className: 'bg-red-500/10',
    color: 'text-red-500',
    duration: 600,
  },
  {
    title: 'Easy Setup',
    desc: 'Fusce mattis nibh vel tortor scelerisque, a pretium dolor posuere.',
    icon: 'solar:settings-bold-duotone',
    className: 'bg-teal-500/10',
    color: 'text-teal-700',
    duration: 900,
  },
];

export const testimonialData = [
  {
    text: `It is one of the very convenient to use project manager ever! I have
        tried many project management apps for my daily tasks, but this one is far
        better than others. Simply loved it!`,
    name: 'John Doe',
    role: 'Senior Project Manager',
    avatar: avatar1,
    brand: google,
  },
  {
    text: `It is one of the very convenient to use project manager ever! I have
        tried many project management apps for my daily tasks, but this one is far
        better than others. Simply loved it!`,
    name: 'Jane Smith',
    role: 'Senior Project Manager',
    avatar: avatar2,
    brand: amazon,
  },
  {
    text: `It is one of the very convenient to use project manager ever! I have
        tried many project management apps for my daily tasks, but this one is far
        better than others. Simply loved it!`,
    name: 'Bob Johnson',
    role: 'Senior Project Manager',
    avatar: avatar3,
    brand: lenovo,
  },
];

export type footerType = {
  title: string;
  links: string[];
};

export const footerLinks: footerType[] = [
  {
    title: 'PLATFORM',
    links: ['Demo', 'Pricing', 'Integrations', 'Status'],
  },
  {
    title: 'COMPANY',
    links: ['About us', 'Career', 'Contact Us'],
  },
  {
    title: 'LEGAL',
    links: ['Usage Policy', 'Privacy Policy', 'Terms of Service', 'Trust'],
  },
];
