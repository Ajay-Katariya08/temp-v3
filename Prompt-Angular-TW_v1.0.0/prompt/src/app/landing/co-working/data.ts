const coworking2 = 'assets/images/hero/coworking2.png';
const coworking3 = 'assets/images/hero/coworking3.png';
const coworking1 = 'assets/images/hero/coworking1.jpg';
const photos4 = 'assets/images/photos/4.jpg';
const photos5 = 'assets/images/photos/5.jpg';
const photos8 = 'assets/images/photos/8.jpg';
const avatar1 = 'assets/images/avatars/img-1.jpg';
const avatar2 = 'assets/images/avatars/img-2.jpg';
const amazon = 'assets/images/brands/amazon.svg';
const google = 'assets/images/brands/google.svg';

export const sliderData = [coworking2, coworking3, coworking1];

export type AboutType = {
  title: string;
  value: number;
  suffix?: string;
};

export const aboutData: AboutType[] = [
  {
    title: 'Meeting Rooms',
    value: 21,
  },
  {
    title: 'Event Spaces',
    value: 51,
  },
  {
    title: 'Studio Rooms',
    value: 11,
  },
  {
    title: 'Seating Spaces',
    value: 500,
    suffix: '+',
  },
];

export type FeatureType = {
  title: string;
  description: string;
  icon: string;
};

export const featureData: FeatureType[] = [
  {
    title: 'High-Speed Wireless',
    description:
      "We've watched Tailwind grow up over the years and understand it better than almost anyone.",
    icon: 'solar:home-wifi-angle-bold-duotone',
  },
  {
    title: 'Community Events',
    description:
      'You have a business to run. Stop worring about cross-browser keeping your components up to date.',
    icon: 'solar:users-group-two-rounded-bold-duotone',
  },
  {
    title: 'Exercise Facilities',
    description:
      'Replacing a maintains the amount of lines. When replacing a selection objectives and then create.',
    icon: 'solar:armchair-2-bold-duotone',
  },
  {
    title: 'Comfortable Lounges',
    description:
      'Risus sed vulputate odio ut enim blandit. Malesuada consequat interdum mattis facilisis.',
    icon: 'solar:sofa-2-bold-duotone',
  },
];

export type WorkType = {
  image: string;
  title: string;
  description: string;
  icon: string;
  linkText: string;
  aosDuration: string;
};

export const workData: WorkType[] = [
  {
    image: photos8,
    title: 'Shared Desk',
    description:
      "Access to shared workspace and conference rooms. Most suitable to individual looking for people's company.",
    icon: 'tabler:user',
    linkText: '1-5 Shared Spaces',
    aosDuration: '600',
  },
  {
    image: photos5,
    title: 'Dedicated Desk',
    description:
      'A dedicated desk space for you, with 24/7 access to premium amenities and conference rooms.',
    icon: 'tabler:user',
    linkText: '1-5 Dedicated Spaces',
    aosDuration: '1000',
  },
  {
    image: photos4,
    title: 'Event Space',
    description:
      'An excluisive venue designed specifically for events of all kinds, from conferences to celebrations.',
    icon: 'tabler:users',
    linkText: 'Upto 200 People',
    aosDuration: '1400',
  },
];

export type TestimonialType = {
  text: string;
  image: string;
  name: string;
  role: string;
  brand: string;
  padding: string;
};

export const testimonialData: TestimonialType[] = [
  {
    text: 'Awesome vibe and great staff! Top cooworking spots in the city! Loved to be here!',
    image: avatar1,
    name: 'John Stark',
    role: 'Engineering Director',
    brand: amazon,
    padding: 'md:p-12 p-6',
  },
  {
    text: 'Great office and great location. Worth the money if it makes sense for your business.',
    image: avatar2,
    name: 'Cersei Lannister',
    role: 'Senior Project Manager',
    brand: google,
    padding: 'p-12',
  },
  {
    text: 'Awesome vibe and great staff! Top cooworking spots in the city! Loved to be here!',
    image: avatar1,
    name: 'John Stark',
    role: 'Engineering Director',
    brand: amazon,
    padding: 'md:p-12 p-6',
  },
  {
    text: 'Great office and great location. Worth the money if it makes sense for your business.',
    image: avatar2,
    name: 'Cersei Lannister',
    role: 'Senior Project Manager',
    brand: google,
    padding: 'p-12',
  }
];

export const navigationData: string[] = ['Home', 'Locations', 'Plans', 'Events'];

export const contactData: string[] = ['Support', 'Developers', 'Customer Service', 'Get Started Guide'];