// @flow
import React, {Component} from 'react';

import {Route, Routes} from 'react-router-dom';
import {routes} from './routes';

type Props = { /* ... */ };

class Router extends Component<Props> {
  render() {
    return (
      <div className="router">
        <Routes>
          {
            routes.map((route, i) => <Route key={`route-${i}`} {...route} />)
          }
        </Routes>
      </div>
    );
  }
}

export default Router;
