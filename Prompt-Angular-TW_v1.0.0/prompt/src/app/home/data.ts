const app = 'assets/images/demo/home-app.jpg';
const portfoilo = 'assets/images/demo/home-portfolio.jpg';
const saas = 'assets/images/demo/home-saas.jpg';
const market = 'assets/images/demo/home-marketing.jpg';
const saas2 = 'assets/images/demo/home-saas2.jpg';

const homeApp = 'assets/images/demo/home-app.jpg';
const homeSaas = 'assets/images/demo/home-saas.jpg';
const homeSaas2 = 'assets/images/demo/home-saas2.jpg';
const startup = 'assets/images/demo/home-startup.jpg';
const software = 'assets/images/demo/home-software.jpg';
const agency = 'assets/images/demo/home-agency.jpg';
const coworking = 'assets/images/demo/home-coworking.jpg';
const crypto = 'assets/images/demo/home-crypto.jpg';
const marketing = 'assets/images/demo/home-marketing.jpg';
const homePortfolio = 'assets/images/demo/home-portfolio.jpg';
const dashboard = 'assets/images/demo/dashboard.png';
const account = 'assets/images/demo/account.png';
const company = 'assets/images/demo/company.jpg';
const contact = 'assets/images/demo/contact.jpg';
const career = 'assets/images/demo/career.jpg';
const blog = 'assets/images/demo/blog.jpg';
const blogpost = 'assets/images/demo/blog-post.jpg';
const grid = 'assets/images/demo/portfolio-grid.jpg';
const masonry = 'assets/images/demo/portfolio-masonry.jpg';
const item = 'assets/images/demo/portfolio-item.jpg';
const pricing = 'assets/images/demo/pricing.jpg';
const help = 'assets/images/demo/help.jpg';
const authLogin = 'assets/images/demo/auth-login.jpg';
const authSignup = 'assets/images/demo/auth-signup.jpg';
const authPassword = 'assets/images/demo/auth-password.jpg';
const authConfirm = 'assets/images/demo/auth-confirm.jpg';

export type ImageType = {
  image: string;
  alt: string;
};

export const imageData: ImageType[] = [
  {
    image: app,
    alt: 'saas1',
  },
  {
    image: portfoilo,
    alt: 'saas3',
  },
  {
    image: saas,
    alt: 'saas2',
  },
  {
    image: market,
    alt: 'saas3',
  },
  {
    image: saas2,
    alt: 'saas3',
  },
];

export type DemoType = {
  label: string;
  image: string;
  link: string;
};

export const demoData: DemoType[] = [
  {
    label: 'Mobile App',
    link: '/home/app',
    image: homeApp,
  },
  {
    label: 'Saas Modern',
    link: '/home/saas',
    image: homeSaas,
  },
  {
    label: 'Saas Classic',
    link: '/home/saas2',
    image: homeSaas2,
  },
  {
    label: 'Startup',
    link: '/home/startup',
    image: startup,
  },
  {
    label: 'Software',
    link: '/home/software',
    image: software,
  },
  {
    label: 'Agency',
    link: '/home/agency',
    image: agency,
  },
  {
    label: 'Co-Working',
    link: '/home/coworking',
    image: coworking,
  },
  {
    label: 'Crypto',
    link: '/home/crypto',
    image: crypto,
  },
  {
    label: 'Marketing',
    link: '/home/marketing',
    image: marketing,
  },
  {
    label: 'Portfolio',
    link: '/home/portfolio',
    image: homePortfolio,
  },
  {
    label: 'Dashboard',
    link: '/account/dashboard',
    image: dashboard,
  },
  {
    label: 'Account Settings',
    link: '/account/settings',
    image: account,
  },
  {
    label: 'Company',
    link: '/company',
    image: company,
  },
  {
    label: 'Contact',
    link: '/contact',
    image: contact,
  },
  {
    label: 'Career',
    link: '/career',
    image: career,
  },
  {
    label: 'Blog',
    link: '/blog',
    image: blog,
  },
  {
    label: 'Blog Post',
    link: '/blog/post',
    image: blogpost,
  },
  {
    label: 'Portfolio Grid',
    link: '/portfolio/grid',
    image: grid,
  },
  {
    label: 'Portfolio Masonry',
    link: '/portfolio/masonry',
    image: masonry,
  },
  {
    label: 'Portfolio Item',
    link: '/portfolio/item',
    image: item,
  },
  {
    label: 'Pricing',
    link: '/pricing',
    image: pricing,
  },
  {
    label: 'Help',
    link: '/help',
    image: help,
  },
  {
    label: 'Login',
    link: '/account/login',
    image: authLogin,
  },
  {
    label: 'Signup',
    link: '/account/signup',
    image: authSignup,
  },
  {
    label: 'Forget Password',
    link: '/account/forget-password',
    image: authPassword,
  },
  {
    label: 'Confirm Account',
    link: '/account/confirm',
    image: authConfirm,
  },
];

export interface FeatureType {
  title: string;
  icon?: string;
  iconType?: 'svg';
  link?: string;
  duration: number;
}

export const featuresData = [
  {
    title: 'Based on latest Tailwind v3.4.14',
    iconType: 'svg',
    duration: 600,
  },
  {
    title: 'Fully Responsive',
    icon: 'solar:smartphone-2-bold-duotone',
    duration: 600,
  },
  {
    title: 'Iconify Icon Use',
    icon: 'solar:basketball-bold-duotone',
    link: 'https://icon-sets.iconify.design/',
    duration: 600,
  },
  {
    title: 'Cross-browser compatible',
    icon: 'solar:global-bold-duotone',
    duration: 600,
  },
  {
    title: 'Easy to customize',
    icon: 'solar:code-scan-bold-duotone',
    duration: 900,
  },
  {
    title: 'Developer Friendly',
    icon: 'solar:smile-circle-bold-duotone',
    duration: 900,
  },
  {
    title: 'Clean & Easy to Understand Code',
    icon: 'solar:code-2-bold-duotone',
    duration: 1200,
  },
  {
    title: 'Free Updates',
    icon: 'solar:clipboard-check-bold-duotone',
    duration: 1200,
  },
];
