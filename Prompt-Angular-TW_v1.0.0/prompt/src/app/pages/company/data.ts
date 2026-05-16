const avatar1 = "assets/images/avatars/img-1.jpg";
const avatar2 = "assets/images/avatars/img-2.jpg";
const avatar3 = "assets/images/avatars/img-3.jpg";
const avatar4 = "assets/images/avatars/img-4.jpg";
const avatar5 = "assets/images/avatars/img-5.jpg";
const avatar6 = "assets/images/avatars/img-6.jpg";
const avatar7 = "assets/images/avatars/img-7.jpg";
const avatar8 = "assets/images/avatars/img-8.jpg";

// Brand image imports
const amazon = "assets/images/brands/amazon.svg";
const google = "assets/images/brands/google.svg";
const paypal = "assets/images/brands/paypal.svg";
const shopify = "assets/images/brands/shopify.svg";

export type StatType ={
  value: string;
  title: string;
  description: string;
}

export const statsData: StatType[] = [
  {
    value: "100+",
    title: "Products Built",
    description: "helped clients across the globe"
  },
  {
    value: "$21M+",
    title: "Revenue Generated",
    description: "across 10+ countries"
  },
  {
    value: "100+",
    title: "Satisfied Clients",
    description: "across 100+ locations"
  },
  {
    value: "10+",
    title: "Awards Won",
    description: "on Awwwards, CSS Design Awards"
  }
];

export type TeamMemberType = {
  name: string;
  position: string;
  avatar: string;
}

export const teamData: TeamMemberType[] = [
  {
    name: "Ana Russo",
    position: "CEO",
    avatar: avatar1
  },
  {
    name: "Danette Payne",
    position: "CTO",
    avatar: avatar2
  },
  {
    name: "Tammy Ward",
    position: "VP, Product Development",
    avatar: avatar3
  },
  {
    name: "Paul Moore",
    position: "Back-End Developer",
    avatar: avatar4
  },
  {
    name: "Harry Burris",
    position: "PHP Developer",
    avatar: avatar5
  },
  {
    name: "Patricia Ferraro",
    position: "Web Designer",
    avatar: avatar6
  },
  {
    name: "Robert Smith",
    position: "Graphic Designer",
    avatar: avatar7
  },
  {
    name: "Lindsay Clark",
    position: "Web Designer",
    avatar: avatar8
  },
  {
    name: "Lindsay Clark",
    position: "Front-End Developer",
    avatar: avatar1
  },
  {
    name: "Ernest Griffith",
    position: "PHP Developer",
    avatar: avatar2
  },
  {
    name: "Cecelia Poole",
    position: "Back-End Developer",
    avatar: avatar3
  },
  {
    name: "Morris Hall",
    position: "Graphic Designer",
    avatar: avatar4
  }
];

export type BrandType = {
  name: string;
  logo: string;
}

export const brandsData: BrandType[] = [
  {
    name: "amazon",
    logo: amazon
  },
  {
    name: "google",
    logo: google
  },
  {
    name: "paypal",
    logo: paypal
  },
  {
    name: "shopify",
    logo: shopify
  }
];