// @flow
import React, {Component} from 'react';

import './Projects.scss';

type Props = { /* ... */ };

class Projects extends Component<Props> {
  render() {
    return (
      <div className='Projects'>
        <h1>Projects. <small className='text-muted'>Think open.</small></h1>

        <div className='row'>
          <div className='col-sm-2'>
            Citrus Simulator
          </div>
          <div className='col text-italic'>
              Standalone simulator for different messaging transports.
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-2'>
            next-redux-saga
          </div>
          <div className='col text-italic'>
            Redux-Saga (alternative side effect model for Redux) integration for Next.js.
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-2'>
            Angular
          </div>
          <div className='col text-italic'>
            One framework. Mobile & desktop.
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-2'>
            TBME TV
          </div>
          <div className='col text-italic'>
            An open source streaming application.
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-2'/>
          <div className='col text-muted text-italic'>
            Project archived (read-only), no more supporters.
          </div>
        </div>

        <br/>

        <p>
          Visit me on <a href='https://github.com/bbortt'><span className='text-github'>GitHub</span></a>. I would love to collaborate with you!
        </p>
      </div>
    );
  }
}

export default Projects;
