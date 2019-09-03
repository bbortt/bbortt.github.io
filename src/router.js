// @flow
import React, {Component} from 'react';

import {Route} from 'react-router-dom';
import {routes} from './routes';

type Props = { /* ... */ };

class Router extends Component<Props> {
    render() {
        return (
            <div className='router'>
                {
                    routes.map((route, i) => <Route key={`route-${i}`} {...route} />)
                }
            </div>
        );
    }
}

export default Router;
