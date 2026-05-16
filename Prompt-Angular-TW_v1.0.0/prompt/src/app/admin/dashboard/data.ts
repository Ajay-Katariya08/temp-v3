const avatar8 = 'assets/images/avatars/img-8.jpg';
const avatar5 = 'assets/images/avatars/img-5.jpg';

export type ProjectType = {
  date: string;
  title: string;
  category: string;
  categoryClass: string;
  description: string;
  progress: number;
  progressColor: string;
  members: string[];
};

export const projectData: ProjectType[] = [
  {
    date: 'Aug 09, 2020',
    title: 'Shreyu - Design Updates',
    category: 'Designing',
    categoryClass: 'bg-primary/10 text-primary',
    description: 'Update shreyu with modern and latest trends...',
    progress: 75,
    progressColor: 'bg-green-500',
    members: [avatar8, avatar5],
  },
  {
    date: 'Aug 10, 2020',
    title: 'Prompt v2.0',
    category: 'Planning',
    categoryClass: 'bg-orange-500/10 text-orange-500',
    description: 'Plan new features and functionality for prompt...',
    progress: 50,
    progressColor: 'bg-red-500',
    members: [avatar8, avatar5],
  },
  {
    date: 'Aug 11, 2020',
    title: 'Hyper React v4.0',
    category: 'Development',
    categoryClass: 'bg-sky-500/10 text-sky-500',
    description: 'Update shreyu with modern and latest trends...',
    progress: 60,
    progressColor: 'bg-amber-500',
    members: [avatar8, avatar5],
  },
];

export type TaskType = {
  id: string;
  title: string;
  time: string;
  timeClass: string;
  progress: string;
  comments: string;
  priority: string;
  priorityClass: string;
};

export const taskData: TaskType[] = [
  {
    id: 'task1',
    title: 'Draft the new contract document for sales team',
    time: 'Today 10pm',
    timeClass: 'bg-cyan-500/10 text-cyan-500',
    progress: '3/7',
    comments: '21',
    priority: 'High',
    priorityClass: 'bg-red-500/10 text-red-500',
  },
  {
    id: 'task2',
    title: 'iOS App home page design',
    time: 'Today 5pm',
    timeClass: 'bg-cyan-500/10 text-cyan-500',
    progress: '10/11',
    comments: '05',
    priority: 'Medium',
    priorityClass: 'bg-orange-500/10 text-orange-500',
  },
  {
    id: 'task3',
    title: 'Enable analytics tracking',
    time: 'Tomorrow 5pm',
    timeClass: 'bg-default-500/10 text-default-500',
    progress: '05/11',
    comments: '07',
    priority: 'Medium',
    priorityClass: 'bg-orange-500/10 text-orange-500',
  },
  {
    id: 'task4',
    title: 'Kanban board design',
    time: 'Sep 11, 3pm',
    timeClass: 'bg-default-500/10 text-default-500',
    progress: '0/3',
    comments: '07',
    priority: 'Low',
    priorityClass: 'bg-green-500/10 text-green-500',
  },
];
