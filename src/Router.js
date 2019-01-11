// @flow
import React, {Component} from 'react';

import {BrowserRouter, Route} from 'react-router-dom';
import {routes} from './routes';

type Props = { /* ... */ };

class Router extends Component<Props> {
  render() {
    return (
      <BrowserRouter>
        <div className='Router'>
          {
            routes.map((route, i) => <Route key={`route-${i}`} {...route} />)
          }
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
