// @flow
import Home from './container/home';
import Projects from './container/projects';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/projects',
    component: Projects
  }
];
