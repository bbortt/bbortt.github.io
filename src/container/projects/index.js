// @flow
import React, {Component} from 'react';
import Loadable from 'react-loadable';

import Project from '../../components/projects/project'

type Props = { /* ... */ };

class Projects extends Component<Props> {
  render() {
    return (
      <div className='projects'>
        <h2>Projects. <small className='text-muted'>Think open.</small></h2>

        <Project title='Citrus Simulator' description='Standalone simulator for different messaging transports.'/>
        <Project title='next-redux-saga'
                 description='Redux-Saga (alternative side effect model for Redux) integration for Next.js.'/>
        <Project title='Angular' description='One framework. Mobile & desktop.'/>
        <Project title='TBME TV' description='An open source streaming application.'
                 detail='Project archived (read-only), no more supporters.'/>

        <br/>

        <p>
          Visit me on <a href='https://github.com/bbortt'><span className='text-github'>GitHub</span></a>. I
          would love to collaborate with you!
        </p>
      </div>
    );
  }
}

export default Loadable({
  loader: () => Promise.resolve(Projects),
  loading: () => <div>Loading...</div>
});
