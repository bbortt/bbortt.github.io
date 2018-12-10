import Home from './view/Home';
import KeyList from './view/KeyList/KeyList';

export const routes = [
  {
    exact: true,
    path: "/",
    component: Home
  },
  {
    path: "/keys",
    component: KeyList
  }
];
