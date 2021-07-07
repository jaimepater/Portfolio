import { lazy } from 'react';

const Home = lazy(() => import('../../Containers/Portfolio/Portfolio'));
const ContactMe = lazy(() => import('../../Containers/ContactMe/ContactMe'));
const routes = [
  {
    id: 'HOME',
    path: '/',
    name: 'Home',
    exact: true,
    component: Home,
  },
  {
    id: 'CONTACT_ME',
    path: '/contact-me',
    name: 'Contact Me',
    exact: true,
    component: ContactMe,
  },
];

export const getRoutes = () => routes;
export const gerRoute = (id: string) => routes.find(route => route.id === id);
