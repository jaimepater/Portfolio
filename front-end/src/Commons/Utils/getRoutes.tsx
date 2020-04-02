import { ComponentType, lazy, LazyExoticComponent } from 'react';

export interface Route {
  id: string;
  path: string;
  name: string;
  exact: boolean;
  component: LazyExoticComponent<ComponentType<any>>;
}

const Home = lazy(() => import('../../Containers/Portfolio/Portfolio'));
const ContactMe = lazy(() => import('../../Containers/ContactMe/ContactMe'));
const routes: Array<Route> = [
  {
    id: 'HOME',
    path: '/',
    name: 'Home',
    exact: true,
    component: Home
  },
  {
    id: 'CONTACT_ME',
    path: '/contact-me',
    name: 'Contact Me',
    exact: true,
    component: ContactMe
  }
];

export const getRoutes = () => routes;
export const gerRoute = (id: string) => routes.find(route => route.id === id);
