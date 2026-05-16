const amazonSvg = 'assets/images/brands/amazon.svg';
const googleSvg = 'assets/images/brands/google.svg';
const paypalSvg = 'assets/images/brands/paypal.svg';
const spotifySvg = 'assets/images/brands/spotify.svg';
const shopifySvg = 'assets/images/brands/shopify.svg';

const slack = 'assets/images/brands/slack.png';
const fb = 'assets/images/brands/fb.png';
const salesforce = 'assets/images/brands/salesforce.jpg';
const airtable = 'assets/images/brands/at.png';
const gsheet = 'assets/images/brands/gsheet.png';
const activeCampaign = 'assets/images/brands/ac.jpeg';

export const brandimages = [amazonSvg, googleSvg, paypalSvg, spotifySvg, shopifySvg];

export const integrationData = [
  {
    name: 'Slack',
    description:
      'Slack is a platform for team communication: everything in one place, instantly searchable, available wherever you go',
    image: slack,
    imgClass: 'w-16',
  },
  {
    name: 'Facebook Lead Ads',
    description:
      'Facebook lead ads make signing up for business information easy for people and more valuable for businesses',
    image: fb,
    imgClass: 'w-16',
  },
  {
    name: 'Salesforce',
    description:
      'Salesforce is a leading enterprise customer relationship manager (CRM) application',
    image: salesforce,
    imgClass: 'w-16',
  },
  {
    name: 'Airtable',
    description: 'Organize anything with Airtable, a modern database created for everyone',
    image: airtable,
    imgClass: 'w-16',
  },
  {
    name: 'Google Sheets',
    description:
      'Create, edit, and share spreadsheets with Google Sheets, and get automated insights from data',
    image: gsheet,
    imgClass: 'xl:w-32 w-16',
  },
  {
    name: 'ActiveCampaign',
    description:
      'ActiveCampaign combines all aspects of email marketing into a single and easy-to-use platform',
    image: activeCampaign,
    imgClass: 'w-16',
  },
];

export type footerType = {
  title: string;
  links: string[];
};

export const footerLinks: footerType[] = [
  {
    title: 'PLATFORM',
    links: ['Demo', 'Pricing', 'Integrations', 'Status'],
  },
  {
    title: 'COMPANY',
    links: ['About us', 'Career', 'Contact Us'],
  },
  {
    title: 'LEGAL',
    links: ['Usage Policy', 'Privacy Policy', 'Terms of Service', 'Trust'],
  },
];
