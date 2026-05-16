export type PricingType = {
  name: string;
  price: number;
  duration: string;
  features: string[];
  isPopular?: boolean;
};

export const pricingData: PricingType[] = [
  {
    name: 'Starter',
    price: 49,
    duration: '/ month',
    features: [
      'Up to 600 minutes usage time',
      'Use for personal only',
      'Add up to 10 attendees',
      'Technical support via email',
    ],
  },
  {
    name: 'Professional',
    price: 99,
    duration: '/ month',
    isPopular: true,
    features: [
      'Up to 6000 minutes usage time',
      'Use for personal or a commercial client',
      'Add up to 100 attendees',
      'Up to 5 teams',
      'Technical support via email',
    ],
  },
  {
    name: 'Enterprise',
    price: 599,
    duration: '/ month',
    features: [
      'Unlimited usage time',
      'Use for personal or a commercial client',
      'Add Unlimited attendees',
      '24x7 Technical support via phone',
      'Technical support via email',
    ],
  },
];

export type ServiceType = {
  icon: string;
  title: string;
  description: string;
};

export const serviceData: ServiceType[] = [
  {
    icon: 'solar:incoming-call-rounded-bold-duotone',
    title: 'Technical Support',
    description: 'Our professional technical support team will help you out at every step',
  },
  {
    icon: 'solar:compass-bold-duotone',
    title: 'Technology',
    description: 'A special training to get start with the platform by professionals',
  },
  {
    icon: 'solar:chart-2-bold-duotone',
    title: 'Growth Analysis',
    description: 'A dedicated team to get insights around your growth every month',
  },
  {
    icon: 'solar:cup-star-bold-duotone',
    title: 'Rewards',
    description: 'A special reward for the most performing account every month',
  },
];


export type FaqType = {
  question: string;
  answer: string;
  isOpen?: boolean;
};

export const faqData: FaqType[] = [
  {
    question: 'Can I use this template for my client?',
    answer:
      'Yup, the marketplace license allows you to use this theme in any end products. For more information on licenses, please refere license terms on marketplace.',
    isOpen: true,
  },
  {
    question: 'Can this theme work with WordPress?',
    answer:
      "No. This is a HTML template. It won't directly with WordPress, though you can convert this into WordPress compatible theme.",
  },
  {
    question: 'How do I get help with the theme?',
    answer:
      'Use our dedicated support email (support@coderthemes.com) to send your issues or feedback. We are here to help anytime.',
  },
  {
    question: 'Will you regularly give updates of Prompt ?',
    answer:
      'Yes, We will update the Prompt regularly. All the future updates would be available without any cost.',
  },
];

export type SupportType = {
  title: string;
  description: string;
  buttonText: string;
};

export const supportData: SupportType[] = [
  {
    title: 'Get in touch',
    description:
      "Get in touch with our professional business development team and they'll answer your question shortly",
    buttonText: 'Contact Us',
  },
  {
    title: 'Explore Knowledge Base',
    description:
      'Learn more about all the features and functionality from our detailed knowledge base.',
    buttonText: 'Explore',
  },
];
