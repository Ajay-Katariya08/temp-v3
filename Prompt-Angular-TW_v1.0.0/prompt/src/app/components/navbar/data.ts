export type MenuItemType = {
  label?: string;
  url?: string;
  type?: 'link' | 'dropdown' | 'mega';
  badge?: string;
  icon?: string;
  color?: string;
  bg?: string;
  children?: MenuItemType[];
  isDivider?: boolean;
};

export const menuItems: MenuItemType[] = [
  {
    type: 'link',
    label: 'Home',
    url: '/',
  },
  {
    type: 'mega',
    label: 'Landing',
    children: [
      {
        label: 'App',
        url: '/home/app',
        icon: 'solar:smartphone-2-bold-duotone',
        color: 'text-blue-600',
        bg: 'bg-blue-600/10',
      },
      {
        label: 'Saas Modern',
        url: '/home/saas',
        icon: 'solar:laptop-minimalistic-bold-duotone',
        color: 'text-green-500',
        bg: 'bg-green-500/20',
      },
      {
        label: 'Saas Classic',
        url: '/home/saas2',
        icon: 'solar:monitor-bold-duotone',
        color: 'text-primary',
        bg: 'bg-primary/10',
      },
      {
        label: 'Startup',
        url: '/home/startup',
        icon: 'solar:pulse-bold-duotone',
        color: 'text-orange-600',
        bg: 'bg-orange-600/10',
      },
      {
        label: 'Software',
        url: '/home/software',
        icon: 'solar:layers-bold-duotone',
        color: 'text-amber-400',
        bg: 'bg-amber-400/10',
      },
      {
        label: 'Agency',
        url: '/home/agency',
        icon: 'solar:bolt-circle-bold-duotone',
        color: 'text-black',
        bg: 'bg-black/10',
      },
      {
        label: 'Coworking',
        url: '/home/coworking',
        icon: 'solar:home-wifi-bold-duotone',
        color: 'text-primary',
        bg: 'bg-primary/10',
      },
      {
        label: 'Crypto',
        url: '/home/crypto',
        icon: 'solar:dollar-minimalistic-bold-duotone',
        color: 'text-orange-600',
        bg: 'bg-orange-600/10',
      },
      {
        label: 'Marketing',
        url: '/home/marketing',
        icon: 'solar:letter-opened-bold-duotone',
        color: 'text-blue-500',
        bg: 'bg-blue-500/10',
      },
      {
        label: 'Portfolio',
        url: '/home/portfolio',
        icon: 'solar:wallpaper-bold-duotone',
        color: 'text-red-500',
        bg: 'bg-red-500/10',
      },
    ],
  },
  {
    type: 'dropdown',
    label: 'Pages',
    children: [
      {
        label: 'Account',
        children: [
          { label: 'Dashboard', url: '/account/dashboard' },
          { label: 'Settings', url: '/account/settings' },
          { label: 'Login', url: '/account/login' },
          { label: 'Sign Up', url: '/account/signup' },
          { label: 'Forget Password', url: '/account/forget-password' },
          { label: 'Confirm Account', url: '/account/confirm' },
        ],
      },
      {
        label: 'Blog',
        children: [
          { label: 'Blog', url: '/blog' },
          { label: 'Blog Post', url: '/blog/post' },
        ],
      },
      { isDivider: true },
      { label: 'Company', url: '/company' },
      { label: 'Career', url: '/career' },
      { label: 'Pricing', url: '/pricing' },
      {
        label: 'Portfolio',
        children: [
          { label: 'Portfolio Grid', url: '/portfolio/grid' },
          { label: 'Portfolio Masonry', url: '/portfolio/masonry' },
          { label: 'Portfolio Item', url: '/portfolio/item' },
        ],
      },
      { isDivider: true },
      { label: 'Help', url: '/help' },
    ],
  },
  {
    type: 'link',
    label: 'Contact us',
    url: '/contact',
  },
];
