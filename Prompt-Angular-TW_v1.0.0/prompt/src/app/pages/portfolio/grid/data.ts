const img1 = 'assets/images/photos/1.jpg';
const img3 = 'assets/images/photos/3.jpg';
const img4 = 'assets/images/photos/4.jpg';
const img5 = 'assets/images/photos/5.jpg';
const img6 = 'assets/images/photos/6.jpg';
const img7 = 'assets/images/photos/7.jpg';

export type PortfolioType ={
  id: number;
  title: string;
  description: string;
  image: string;
  groups: string[];
}

export const portfolioData: PortfolioType[] = [
  {
    id: 1,
    title: "Smart Desk v2.0",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    image: img1,
    groups: ["web-design"]
  },
  {
    id: 2,
    title: "Task Manager",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    image: img7,
    groups: ["graphic-design"]
  },
  {
    id: 3,
    title: "Portfolio Manager",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    image: img3,
    groups: ["photography", "web-design"]
  },
  {
    id: 4,
    title: "Smart Office v2.0",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    image: img4,
    groups: ["illustrator"]
  },
  {
    id: 5,
    title: "Online Conference",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    image: img5,
    groups: ["photography", "web-design"]
  },
  {
    id: 6,
    title: "Virtual Receptionist",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    image: img6,
    groups: ["graphic-design"]
  }
];