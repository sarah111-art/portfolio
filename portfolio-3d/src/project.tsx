export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  demoUrl?: string;
  demoUrlAdmin?: string;
  sourceCode?: string;
  username?: string;
  pass?: string;
}

export const mockProjects = [
  {
    id: 'food-ordering',
    title: 'Food Ordering Website',
    description: 'An online food ordering platform that allows users to browse menus, place orders, make payments, and track delivery status.',
    imageUrl: '/images/food-ordering.png',
    technologies: ['MERN Stack', 'Tailwind CSS'],
    demoUrl: 'https://food-frontend-rouge.vercel.app/',
    demoUrlAdmin:'https://food-admin-rosy.vercel.app/',
    sourceCode: 'https://github.com/sarah111-art/Food',
    username:'admin@foodsun.com',
    pass:'admin123'
  },
  {
    id: 'terarium-project',
    title: 'Terarium Project',
    description: 'An ecommerce website for selling terrarium products with cart features and an admin dashboard for managing orders.',
    imageUrl: '/images/coi-demo.png',
    technologies: ['MERN Stack', 'Admin Dashboard'],
    demoUrl: 'https://coigarden.vercel.app/',
    demoUrlAdmin: 'https://coigarden-admin.vercel.app/',
    sourceCode: 'https://github.com/sarah111-art/tree',
    username:'ad@coigarden.com',
    pass:'quyquy'
  },
  {
    id: 'unstudio',
    title: 'UNSTUDIO',
    description: 'An architectural and interior design consulting platform specializing in design consulting, cost planning, and project controls. Team of 6 members (3 Frontend, 3 Backend). Role: Backend Developer.',
    imageUrl: '/images/unstudio-demo.png',
    technologies: ['ReactJS', 'NestJS', 'AWS R2', 'MySQL'],
    demoUrl: 'http://61.14.233.180:8090/en',
  },
  {
    id: 'komo',
    title: 'KOMO',
    description: 'A management system with attendance tracking features including check-in/check-out functionality and Excel file export support. Role: Backend Developer. Built for KOMO team.',
    imageUrl: '/images/komo-demo.png',
    technologies: ['NestJS', 'PHP Gateway', 'Excel Export'],
    demoUrl: 'https://manage-dev.mykomo.co/attendance',
  },
];
