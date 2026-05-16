const blog1 = 'assets/images/blog/blog-1.png';
const blog2 = 'assets/images/blog/blog-2.png';
const blog3 = 'assets/images/blog/blog-3.png';

export const tagData: string[] = ['Business', 'Community', 'Announcement', 'Tutorials', 'Resources', 'Interview'];

export type BlogType = {
  image: string;
  category: string;
  categoryBg: string;
  className: string;
  title: string;
  description: string;
};

export const blogData: BlogType[] = [
  {
    image: blog1,
    category: 'Announcement',
    categoryBg: 'bg-orange-500/10',
    className: 'text-orange-500',
    title: 'Introducing new blazzing fast user interface',
    description:
      'Introducing the blazzing fast user interface. The new UI is fast, secure and most user friendly...',
  },
  {
    image: blog2,
    category: 'Tutorial',
    categoryBg: 'bg-green-500/10',
    className: 'text-green-500',
    title: 'What you should know before considering the Prompt',
    description:
      'We are giving a pretty extensive guideline and context before you make your decision to consider Prompt...',
  },
  {
    image: blog3,
    category: 'Community',
    categoryBg: 'bg-teal-500/10',
    className: 'text-teal-500',
    title: 'Your Way to a Successful Sales Campaigns',
    description:
      'Explore a latest guideline for creating a successful online sales campaign using google adwords or facebook ads ...',
  },
];
