const saas1 = 'assets/images/hero/saas1.png';
const saas2 = 'assets/images/hero/saas2.png';
const saas3 = 'assets/images/hero/saas3.png';

const amazon = 'assets/images/brands/amazon.svg';
const google = 'assets/images/brands/google.svg';
const paypal = 'assets/images/brands/paypal.svg';
const spotify = 'assets/images/brands/spotify.svg';
const shopify = 'assets/images/brands/shopify.svg';

const img1 = 'assets/images/avatars/img-1.jpg';
const img2 = 'assets/images/avatars/img-2.jpg';
const img3 = 'assets/images/avatars/img-3.jpg';

export const clientData: string[] = [amazon, google, paypal, spotify, shopify];

export type SwiperType = {
  image: string;
  alt: string;
};

export const swiperData: SwiperType[] = [
  {
    image: saas1,
    alt: 'saas1',
  },
  {
    image: saas2,
    alt: 'saas2',
  },
  {
    image: saas3,
    alt: 'saas3',
  },
];

export type FeaturesType = {
  order: string;
  items: string[];
};

export const featuresData: FeaturesType[] = [
  {
    order: 'order-1',
    items: ['Hire and Retain Top Talent', 'Team Management'],
  },
  {
    order: 'order-3 xl:order-2',
    items: ['Stay Compliant', 'Improve Productivity', 'Improve Experience'],
  },
  {
    order: 'order-4 xl:order-3',
    items: ['Self-service Time Tracking', 'Performance Management', 'Expert HR'],
  },
  {
    order: 'order-2 xl:order-4',
    items: ['New Hire Checklist', 'Tax Calculator'],
  },
];

export type AccordionType = {
  title: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  content: string;
  active: boolean;
};

export const accordionData: AccordionType[] = [
  {
    title: 'Improve Employee Experience',
    icon: 'solar:shield-user-bold-duotone',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-500',
    content: `Before we dive into why companies must invest in employee experience (EX),
    it’s important to understand what this concept entails.`,
    active: true,
  },
  {
    title: 'Hiring & Onboarding',
    icon: 'solar:user-plus-bold-duotone',
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-500',
    content: `Post your job, interview candidates and make offers, all on Prompt. Start hiring today.`,
    active: false,
  },
  {
    title: 'People Data & Analytics',
    icon: 'solar:chart-square-bold-duotone',
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-orange-500',
    content: `Finding committed employees is one of public and private organizations’ top priorities.`,
    active: false,
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
    text: `It is one of the very convenient to use project manager ever! I have tried many project management apps for my daily tasks, but this one is far better than others. Simply loved it!`,
    image: img1,
    name: 'Cersei Lannister',
    role: 'Senior Project Manager',
  },
  {
    text: `It is one of the very convenient to use project manager ever! I have tried many project management apps for my daily tasks, but this one is far better than others. Simply loved it!`,
    image: img2,
    name: 'Cersei Lannister',
    role: 'Senior Project Manager',
  },
  {
    text: `It is one of the very convenient to use project manager ever! I have tried many project management apps for my daily tasks, but this one is far better than others. Simply loved it!`,
    image: img3,
    name: 'Cersei Lannister',
    role: 'Senior Project Manager',
  },
];

export type PricingType = {
  title: string;
  price: number;
  highlight: boolean;
  features: string[];
  buttonClass: string;
  marginTop: string;
  aosDuration: number;
};

export const pricingData: PricingType[] = [
  {
    title: 'Starter',
    price: 49,
    highlight: false,
    features: [
      'Up to 600 minutes usage time',
      'Use for personal only',
      'Add up to 10 attendees',
      'Technical support via email',
    ],
    buttonClass:
      'bg-primary/10 text-primary/90 border-transparent hover:border hover:border-primary/20',
    marginTop: 'mt-[120px]',
    aosDuration: 500,
  },
  {
    title: 'Professional',
    price: 99,
    highlight: true,
    features: [
      'Up to 6000 minutes usage time',
      'Use for personal or a commercial',
      'Add up to 100 attendees',
      'Up to 5 teams',
      'Technical support via email',
    ],
    buttonClass:
      'bg-primary text-white hover:shadow-lg hover:shadow-primary/30 hover:border-primary',
    marginTop: 'mt-20',
    aosDuration: 700,
  },
  {
    title: 'Enterprise',
    price: 599,
    highlight: false,
    features: [
      'Unlimited usage time',
      'Use for personal or a commercial',
      'Add Unlimited attendees',
      '24x7 Technical support via phone',
      'Technical support via email',
    ],
    buttonClass:
      'bg-primary/10 text-primary/90 border-transparent hover:border hover:border-primary/20',
    marginTop: 'mt-20',
    aosDuration: 900,
  },
];

export type FaqType = {
  question: string;
  answer: string;
  active: boolean;
};

export const faqData: FaqType[] = [
  {
    question: 'Can I use this template for my client?',
    answer: `Yup, the marketplace license allows you to use this theme in any end products.
    For more information on licenses, please refer license terms on marketplace.`,
    active: true,
  },
  {
    question: 'Can this theme work with WordPress?',
    answer: `No. This is a HTML template. It won't directly work with WordPress,
    though you can convert this into a WordPress compatible theme.`,
    active: false,
  },
  {
    question: 'How do I get help with the theme?',
    answer: `Use our dedicated support email (support@coderthemes.com)
    to send your issues or feedback. We are here to help anytime.`,
    active: false,
  },
  {
    question: 'Will you regularly give updates of Prompt ?',
    answer: `Yes, we will update the Prompt regularly. All future updates
    will be available without any cost.`,
    active: false,
  },
];
