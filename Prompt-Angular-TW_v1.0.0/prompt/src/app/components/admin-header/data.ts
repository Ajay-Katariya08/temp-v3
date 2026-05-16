export type AdminNavType = {
  label: string;
  icon: string;
  link: string;
  active?: boolean;
};

export const adminNavData: AdminNavType[] = [
  {
    label: 'Home',
    icon: 'solar:widget-5-bold-duotone',
    link: '/account/dashboard',
    active: true,
  },
  {
    label: 'Projects',
    icon: 'solar:folder-2-bold-duotone',
    link: '/account/dashboard',
  },
  {
    label: 'Tasks',
    icon: 'solar:hamburger-menu-bold-duotone',
    link: '/account/dashboard',
  },
  {
    label: 'Reports',
    icon: 'solar:chart-square-bold-duotone',
    link: '/account/dashboard',
  },
  {
    label: 'Settings',
    icon: 'solar:tuning-square-2-bold-duotone',
    link: '/account/settings',
  },
];

export type NotificationType = {
  title: string;
  time: string;
  icon: string;
  bgClass: string;
  iconColor: string;
};

export const notificationData: NotificationType[] = [
  {
    title: 'New User Registered',
    time: '2 min ago',
    icon: 'tabler:user-plus',
    bgClass: 'bg-blue-600/10',
    iconColor: 'text-blue-600',
  },
  {
    title: 'A new comment on your post',
    time: '3 min ago',
    icon: 'tabler:photo-plus',
    bgClass: 'bg-orange-400/10',
    iconColor: 'text-orange-400',
  },
  {
    title: 'A new comment on your post',
    time: '3 min ago',
    icon: 'tabler:mail-plus',
    bgClass: 'bg-green-400/10',
    iconColor: 'text-green-400',
  },
  {
    title: 'A new comment on your post',
    time: '3 min ago',
    icon: 'tabler:thumb-up',
    bgClass: 'bg-red-400/10',
    iconColor: 'text-red-400',
  },
];

export type ProfileType = {
  label?: string;
  icon?: string;
  divider?: boolean;
};

export const profileData: ProfileType[] = [
  {
    label: 'Profile',
    icon: 'tabler:user',
  },
  {
    label: 'Settings',
    icon: 'tabler:settings',
  },
  {
    label: 'Support',
    icon: 'tabler:aperture',
  },
  {
    divider: true,
  },
  {
    label: 'Sign Out',
    icon: 'tabler:lock-open',
  },
];

export type MobileMenuType = {
  label: string;
  icon: string;
  link: string;
};

export const mobileMenuData: MobileMenuType[] = [
  {
    label: 'Home',
    icon: 'solar:widget-5-bold-duotone',
    link: '/account/dashboard',
  },
  {
    label: 'Projects',
    icon: 'solar:folder-2-bold-duotone',
    link: '/account/dashboard',
  },
  {
    label: 'Tasks',
    icon: 'solar:hamburger-menu-bold-duotone',
    link: '/account/dashboard',
  },
  {
    label: 'Reports',
    icon: 'solar:chart-square-bold-duotone',
    link: '/account/dashboard',
  },
  {
    label: 'Settings',
    icon: 'solar:tuning-square-2-bold-duotone',
    link: '/account/settings',
  },
];
