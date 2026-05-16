export type ContactType = {
  icon: string;
  title: string;
  value: string;
  bgClass: string;
  textColor: string;
};

export const contactData: ContactType[] = [
  {
    icon: 'solar:letter-opened-bold-duotone',
    title: 'Email',
    value: 'youremail@gmail.com',
    bgClass: 'bg-primary/20',
    textColor: 'text-primary',
  },
  {
    icon: 'solar:incoming-call-rounded-bold-duotone',
    title: 'Phone',
    value: '+00 123 456 7890',
    bgClass: 'bg-orange-500/20',
    textColor: 'text-orange-500',
  },
  {
    icon: 'solar:map-point-bold-duotone',
    title: 'Address',
    value: '565 Brrom Str, NY',
    bgClass: 'bg-teal-500/20',
    textColor: 'text-teal-500',
  },
];

