export type MenuItem = {
  label: string;
  url?: string;
  children?: MenuItem[];
};

export const MENU_DATA: MenuItem[] = [
  {
    label: 'Home',
    url: '/',
  },
  {
    label: 'Landing',
    children: [
      { label: 'App', url: '/home/app' },
      { label: 'Saas Modern', url: '/home/saas' },
      { label: 'Saas Classic', url: '/home/saas2' },
      { label: 'Startup', url: '/home/startup' },
      { label: 'Software', url: '/home/software' },
      { label: 'Agency', url: '/home/agency' },
      { label: 'Coworking', url: '/home/coworking' },
      { label: 'Crypto', url: '/home/crypto' },
      { label: 'Marketing', url: '/home/marketing' },
      { label: 'Portfolio', url: '/home/portfolio' },
    ],
  },
  {
    label: 'Pages',
    children: [
      { label: 'Company', url: '/company' },
      { label: 'Career', url: '/career' },
      { label: 'Pricing', url: '/pricing' },
      { label: 'Help', url: '/help' },
    ],
  },
  {
    label: 'Blog Page',
    children: [
      { label: 'Blog', url: '/blog' },
      { label: 'Blog Post', url: '/blog/post' },
    ],
  },
  {
    label: 'Portfolio',
    children: [
      { label: 'Portfolio Grid', url: '/portfolio/grid' },
      { label: 'Portfolio Masonry', url: '/portfolio/masonry' },
      { label: 'Portfolio Item', url: '/portfolio/item' },
      { label: 'Confirm Account', url: '/account/confirm' },
    ],
  },
  {
    label: 'Account',
    children: [
      { label: 'Login', url: '/account/login' },
      { label: 'Sign Up', url: '/account/signup' },
      { label: 'Forget Password', url: '/account/forget-password' },
      { label: 'Confirm Account', url: '/account/confirm' },
    ],
  },
  {
    label: 'Contact us',
    url: '/contact',
  },
];
