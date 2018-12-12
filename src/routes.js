import Home from './view/Home';
import About from './view/About/About';
import KeyList from './view/KeyList/KeyList';

export const routes = [
  {
    exact: true,
    path: "/",
    component: Home
  },
  {
    path: "/",
    component: About
  },
  {
    path: "/",
    component: KeyList
  }
];
