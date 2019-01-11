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
          <div className='col-sm'>
            Citrus Simulator
          </div>
          <div className='col'>
            Standalone simulator for different messaging transports.
          </div>
        </div>
        <div className='row'>
          <div className='col-sm'>
            Angular
          </div>
          <div className='col'>
            One framework. Mobile & desktop.
          </div>
        </div>
        <div className='row'>
          <div className='col-sm'>
            TBME TV
          </div>
          <div className='col'>
            An open source streaming application.
          </div>
        </div>
        <div className='row'>
          <div className='col-sm'/>
          <div className='col text-muted'>
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
