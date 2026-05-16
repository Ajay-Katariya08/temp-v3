
const img13 = 'assets/images/photos/13.jpg';
const img14 = 'assets/images/photos/14.jpg';
const img15 = 'assets/images/photos/15.jpg';
const img6 = 'assets/images/photos/6.jpg';
const img5 = 'assets/images/photos/5.jpg';
const img12 = 'assets/images/photos/12.jpg';
const img3 = 'assets/images/photos/3.jpg';
const img4 = 'assets/images/photos/4.jpg';

export type PortfolioType = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
};

export const portfolioData: PortfolioType[] = [
  {
    id: 1,
    title: 'Smart Desk v2.0',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
    image: img13,
    category: 'graphic-design',
  },
  {
    id: 2,
    title: 'Iphone App',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
    image: img14,
    category: 'graphic-design',
  },
  {
    id: 3,
    title: 'Iphone App2',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
    image: img15,
    category: 'photography',
  },
  {
    id: 4,
    title: 'Virtual Receptionist',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
    image: img6,
    category: 'graphic-design',
  },
  {
    id: 5,
    title: 'Task Manager',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
    image: img5,
    category: 'web-design',
  },
  {
    id: 6,
    title: 'Task Manager',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
    image: img5,
    category: 'designing',
  },
  {
    id: 7,
    title: 'Virtual Receptionist 2',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
    image: img13,
    category: 'illustrator',
  },
  {
    id: 8,
    title: 'Task Manager',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
    image: img12,
    category: 'development',
  },
  {
    id: 9,
    title: 'Online Conference',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
    image: img15,
    category: 'web-design',
  },
  {
    id: 10,
    title: 'Portfolio Manager',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
    image: img3,
    category: 'photography',
  },
  {
    id: 11,
    title: 'Web Design Project',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
    image: img4,
    category: 'illustrator',
  },
];
