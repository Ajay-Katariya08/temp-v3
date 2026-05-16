const amazon = 'assets/images/brands/amazon.svg';
const google = 'assets/images/brands/google.svg';
const paypal = 'assets/images/brands/paypal.svg';
const spotify = 'assets/images/brands/spotify.svg';
const shopify = 'assets/images/brands/shopify.svg';

const desktop1 = 'assets/images/features/desktop1.gif';
const desktop ='assets/images/hero/desktop.png'

export const brandImage: string[] = [amazon, google, paypal, spotify, shopify];

export const platformData = [
  {
    icon: 'solar:laptop-minimalistic-bold-duotone',
    label: 'Windows',
  },
  {
    icon: 'solar:laptop-bold-duotone',
    label: 'Mac',
  },
  {
    icon: 'solar:window-frame-bold-duotone',
    label: 'Browser',
  },
  {
    icon: 'solar:smartphone-2-bold-duotone',
    label: 'Mobile',
  },
];

export type FeaturesType = {
  badge: string;
  title: string;
  description: string;
  image: string;
  imageOrder: string;
  items: {
    icon: string;
    text: string;
  }[];
};

export const featuresData: FeaturesType[] = [
  {
    badge: 'Free Cloud Account!',
    title: 'Smart auto deployment',
    description: 'Prompts automatically deploys your changes on the cloud',
    image: desktop1,
    imageOrder: 'right',
    items: [
      {
        icon: 'solar:upload-line-duotone',
        text: 'Auto saves the files, one-click sync',
      },
      {
        icon: 'solar:branching-paths-down-bold-duotone',
        text: 'Auto track every changes/revision',
      },
      {
        icon: 'solar:users-group-two-rounded-bold-duotone',
        text: 'Modern way to collaborate with team',
      },
    ],
  },
  {
    badge: 'Auto Sync',
    title: 'AutoSync deployment',
    description: 'Prompts automatically sync your scheduled sync configuration',
    image: desktop,
    imageOrder: 'left',
    items: [
      {
        icon: 'solar:settings-bold-duotone',
        text: 'Auto saves the files, one-click sync',
      },
      {
        icon: 'solar:tuning-3-line-duotone',
        text: 'Auto track every changes/revision',
      },
      {
        icon: 'solar:battery-charge-bold-duotone',
        text: 'A powerful command line interface',
      },
    ],
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