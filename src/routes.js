// @flow
import React from 'react';

import Loadable from 'react-loadable';

const AsyncHome = Loadable({
    loader: () => import ('./container/home'),
    loading: () => <div>Loading...</div>
});

const AsyncProjects = Loadable({
    loader: () => import ('./container/projects'),
    loading: () => <div>Loading...</div>
});

const AsyncSocial = Loadable({
    loader: () => import ('./container/social'),
    loading: () => <div>Loading...</div>
});

const AsyncPGP = Loadable({
    loader: () => import ('./container/key-list'),
    loading: () => <div>Loading...</div>
});

export const routes = [
    {
        path: '/',
        exact: true,
        component: AsyncHome
    },
    {
        path: '/projects',
        component: AsyncProjects
    },
    {
        path: '/social',
        component: AsyncSocial
    },
    {
        path: '/pgp',
        component: AsyncPGP
    }
];
