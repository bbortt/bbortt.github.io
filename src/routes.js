// @flow
import React from 'react';

const AsyncHome = React.lazy(() => import('./container/home'));
const AsyncProjects = React.lazy(() => import('./container/projects'));
const AsyncTalks = React.lazy(() => import('./container/talks'));
const AsyncPublications = React.lazy(() => import('./container/publications'));
const AsyncSocial = React.lazy(() => import('./container/social'));
const AsyncPGP = React.lazy(() => import('./container/key-list'));

export const routes = [
  {
    path: '/',
    exact: true,
    element: <AsyncHome/>
  },
  {
    path: '/projects',
    element: <AsyncProjects/>
  },
  {
    path: '/talks',
    element: <AsyncTalks/>
  },
  {
    path: '/publications',
    element: <AsyncPublications/>
  },
  {
    path: '/social',
    element: <AsyncSocial/>
  },
  {
    path: '/pgp',
    element: <AsyncPGP/>
  }
];
