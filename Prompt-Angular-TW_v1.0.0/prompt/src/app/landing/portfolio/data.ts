const agency1 = 'assets/images/features/agency1.jpg'; 
const agency2 = 'assets/images/features/agency2.jpg';
const img1 = 'assets/images/avatars/img-1.jpg';
const img2 = 'assets/images/avatars/img-2.jpg';
const amazon = 'assets/images/brands/amazon.svg';
const google = 'assets/images/brands/google.svg';

export type ServiceType = {
  icon: string;
  title: string;
  description: string;
  aosDuration: string;
};

export const serviceCardData: ServiceType[] = [
  {
    icon: 'solar:filters-bold-duotone',
    title: 'UI/UX Design',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
    aosDuration: '600',
  },
  {
    icon: 'solar:layers-bold-duotone',
    title: 'Product Design',
    description:
      'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary making.',
    aosDuration: '900',
  },
  {
    icon: 'solar:wallpaper-bold',
    title: 'Frontend Development',
    description:
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
    aosDuration: '1200',
  },
];

export type ProjectType = {
  aosDuration: string;
  items: {
    title: string;
    category: string;
    image: string;
  }[];
};

export const projectCardData: ProjectType[] = [
  {
    aosDuration: '600',
    items: [
      {
        title: 'Project',
        category: 'Branding, Interaction, Web Design',
        image: agency1,
      },
      {
        title: 'Project 2',
        category: 'Branding, Web Design & Development',
        image: agency2,
      },
    ],
  },
  {
    aosDuration: '600',
    items: [
      {
        title: 'Project 3',
        category: 'Branding, Interaction, Web Design',
        image: agency2,
      },
      {
        title: 'Project 4',
        category: 'Branding, Web Design & Development',
        image: agency1,
      },
    ],
  },
];

export type TestimonialType = {
  client: {
    name: string;
    role: string;
    image: string;
  };
  description: string;
  image: string;
};

export const testimonialData: TestimonialType[] = [
  {
    client: {
      name: 'John Stark',
      role: 'Engineering Director',
      image: img1,
    },
    description:
      'Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.',
    image: amazon,
  },
  {
    client: {
      name: 'Cersei Lannister',
      role: 'Senior Project Manager',
      image: img2,
    },
    description:
      'I was bad at front-end until I discovered with Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.',
    image: google,
  },
  {
    client: {
      name: 'John Stark',
      role: 'Engineering Director',
      image: img1,
    },
    description:
      'Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.',
    image: amazon,
  },
  {
    client: {
      name: 'Cersei Lannister',
      role: 'Senior Project Manager',
      image: img2,
    },
    description:
      'I was bad at front-end until I discovered with Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.',
    image: google,
  }
];