export type AccordionType = {
  question: string;
  answer: string;
  isActive?: boolean;
};

export const accordionData: AccordionType[] = [
  {
    question: 'Can I use this template for my client?',
    answer:
      'Yup, the marketplace license allows you to use this theme in any end products. For more information on licenses, please refere license terms on marketplace.',
    isActive: true,
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

export type HelpType = {
  icon: string;
  title: string;
  links: string[];
};

export const helpData: HelpType[] = [
  {
    icon: 'solar:code-square-line-duotone',
    title: 'Getting started',
    links: ['General information', 'Signup help', 'Preparing the documents'],
  },
  {
    icon: 'solar:shield-user-bold-duotone',
    title: 'Managing my account',
    links: ['Managing my account', 'Identity verification', 'Linking a paymeny method'],
  },
  {
    icon: 'solar:sort-horizontal-line-duotone',
    title: 'API & Integrations',
    links: ['Rest API Integrations', 'API SDKs', 'Embed scripts'],
  },
];
