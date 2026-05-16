const img1 = 'assets/images/avatars/img-1.jpg';
const img2 = 'assets/images/avatars/img-2.jpg'
const img3 = 'assets/images/avatars/img-3.jpg'

export type PortfolioType = {
  icon: string;
  title: string;
};

export const portfolioData: PortfolioType[] = [
  {
    icon: 'solar:filters-bold-duotone',
    title: 'UI/UX Design',
  },
  {
    icon: 'solar:settings-bold-duotone',
    title: 'Brand Identity',
  },
  {
    icon: 'solar:wallpaper-bold',
    title: 'Web Development',
  },
];

export type TestimonialType = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const testimonialData: TestimonialType[] = [
  {
    text: `It is one of the very convenient to use project manager ever! I have
    tried many project management apps for my daily tasks, but this one is far better
    than others. Simply loved it!`,
    image: img1,
    name: 'Cersei Lannister',
    role: 'Senior Project Manager',
  },
  {
    text: `It is one of the very convenient to use project manager ever! I have
    tried many project management apps for my daily tasks, but this one is far better
    than others. Simply loved it!`,
    image: img2,
    name: 'Cersei Lannister',
    role: 'Senior Project Manager',
  },
  {
    text: `It is one of the very convenient to use project manager ever! I have
    tried many project management apps for my daily tasks, but this one is far better
    than others. Simply loved it!`,
    image: img3,
    name: 'Cersei Lannister',
    role: 'Senior Project Manager',
  },
];
