export type CryptoType = {
  name: string;
  icon: string;
  iconClass: string;
  hasBg: boolean;
  bgClass?: string;
};

export const cryptoData: CryptoType[] = [
  {
    name: 'Bitcoin',
    icon: 'fa6-brands:bitcoin',
    iconClass: 'text-orange-400 text-5xl',
    hasBg: false,
  },
  {
    name: 'Ethereum',
    icon: 'fa6-brands:ethereum',
    bgClass: 'bg-blue-500',
    iconClass: 'text-white text-3xl',
    hasBg: true,
  },
  {
    name: 'Tether',
    icon: 'fa6-solid:t',
    bgClass: 'bg-emerald-700',
    iconClass: 'text-white text-2xl',
    hasBg: true,
  },
  {
    name: 'Chainlink',
    icon: 'fa6-solid:lock',
    bgClass: 'bg-sky-500',
    iconClass: 'text-white text-2xl',
    hasBg: true,
  },
  {
    name: 'Basic Attention Token',
    icon: 'fa6-solid:diamond',
    bgClass: 'bg-red-500',
    iconClass: 'text-white text-2xl',
    hasBg: true,
  },
  {
    name: 'Dash',
    icon: 'fa6-brands:dochub',
    bgClass: 'bg-sky-500',
    iconClass: 'text-white text-2xl',
    hasBg: true,
  },
  {
    name: 'Binance Coin',
    icon: 'fa6-brands:dropbox',
    bgClass: 'bg-amber-300',
    iconClass: 'text-white text-2xl',
    hasBg: true,
  },
  {
    name: 'Tezos',
    icon: 'fa6-brands:tiktok',
    bgClass: 'bg-green-500',
    iconClass: 'text-white text-2xl',
    hasBg: true,
  },
];

export type FeatureType = {
  title: string;
  description: string;
  icon: string;
};

export const featureData: FeatureType[] = [
  {
    title: 'Secure & Encrypted Transactions',
    description:
      'Advanced payment and processing technologies, fine-tuned from more than 3 years development',
    icon: 'solar:shield-check-bold-duotone',
  },
  {
    title: 'Transparent Fees',
    description:
      'Barbelless catfish pelican gulper candlefish thornfish Gulf menhaden ribbonbearer riffle.',
    icon: 'solar:card-bold-duotone',
  },
  {
    title: 'Easy to Use',
    description:
      'Asiatic glassfish pilchard sandburrower, orangestriped triggerfish hamlet Molly Miller dogfish!',
    icon: 'solar:smile-circle-bold-duotone',
  },
  {
    title: 'Easy to Use',
    description:
      'Asiatic glassfish pilchard sandburrower, orangestriped triggerfish hamlet Molly Miller dogfish!',
    icon: 'solar:phone-calling-bold-duotone',
  },
];

export type StatsType = {
  value: string;
  title: string;
  description: string;
};

export const statsData: StatsType[] = [
  {
    value: '$50M+',
    title: 'Value transacted',
    description: 'in overall sell/buy transactions',
  },
  {
    value: '2.1M+',
    title: 'Transactions Processed',
    description: 'across 10+ countries',
  },
  {
    value: '2M+',
    title: 'Satisfied Processed',
    description: 'across 100+ locations',
  },
  {
    value: '4.5',
    title: 'Star App Rating',
    description: 'on google play & apple store',
  },
];

export type BlogType = {
  tag: string;
  className: string;
  image: string;
  date: string;
  readTime: string;
  title: string;
  aosDuration: number;
};

export const blogData: BlogType[] = [
  {
    tag: 'Announcement',
    className: 'bg-orange-500',
    image: 'assets/images/blog/blog-1.png',
    date: 'May 19 2020',
    readTime: '5 min read',
    title: 'Introducing blazzing fast new user interface',
    aosDuration: 300,
  },
  {
    tag: 'Bitcoin',
    className: 'bg-red-500',
    image: 'assets/images/blog/blog-3.png',
    date: 'May 18 2020',
    readTime: '8 min read',
    title: 'What you should know before buying bitcoin',
    aosDuration: 600,
  },
  {
    tag: 'Event',
    className: 'bg-blue-500',
    image: 'assets/images/blog/blog-2.png',
    date: 'May 13 2020',
    readTime: '2 min read',
    title: 'A biggest crypto event to attend this month',
    aosDuration: 900,
  },
];

export type SectionType = {
  title: string;
  links: string[];
};

export const sectionData: SectionType[] = [
  {
    title: 'Platform',
    links: ['Demo', 'Pricing', 'Integrations', 'Status'],
  },
  {
    title: 'Knowledge Base',
    links: ['Blog', 'Help Center', 'Sales Tools catalog', 'API'],
  },
  {
    title: 'Company',
    links: ['About us', 'Career', 'Contact Us'],
  },
  {
    title: 'Legal',
    links: ['Usage Policy', 'Privacy Policy', 'Terms of Service', 'Trust'],
  },
];
