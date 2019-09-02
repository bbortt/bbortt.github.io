// @flow
import Home from './view/Home';
import Projects from './view/Projects/Projects';
import KeyList from './view/KeyList/KeyList';

export const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/projects',
        component: Projects
    },
    {
        path: '/',
        exact: true,
        component: KeyList
    }
];
