import { lazy } from 'react';

const HomePortfolio = lazy(() => import('../../Containers/Portfolio/Portfolio'));
const ContactMe = lazy(() => import('../../Containers/ContactMe/ContactMe'));
const HomeSolutions = lazy(() => import('../../Containers/Solutions/Solutions'));

export enum RoutesPageTypes {
  PORTFOLIO = 'PORTFOLIO',
  SOLUTIONS = 'SOLUTIONS',
}
const routesPortfolio = [
  {
    id: 'HOME',
    path: '/',
    name: 'Home',
    exact: true,
    component: HomePortfolio,
  },
  {
    id: 'CONTACT_ME',
    path: '/contact-me',
    name: 'Contact Me',
    exact: true,
    component: ContactMe,
  },
];

const routesSolutions = [
  {
    id: 'HOME',
    path: '/',
    name: 'Home',
    exact: true,
    component: HomeSolutions,
  },
];

const routes = {
  [RoutesPageTypes.PORTFOLIO]: routesPortfolio,
  [RoutesPageTypes.SOLUTIONS]: routesSolutions,
};

export const getRoutes = (type: RoutesPageTypes) => routes[type];
export const gerRoute = (type: RoutesPageTypes) => (id: string) =>
  routes[type].find(route => route.id === id);
