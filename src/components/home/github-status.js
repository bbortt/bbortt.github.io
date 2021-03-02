// @flow
import React, {Component} from 'react';

type Props = { /* ... */ };

class GithubStatus extends Component<Props> {
  render() {
    return (
      <div className='github-status d-flex justify-content-center'>
        <img id='github-status' className='img-fluid rounded align-self-center' alt='GitHub status report for bbortt.'
             src='https://github-readme-stats.vercel.app/api?username=bbortt'/>
      </div>
    );
  }
}

export default GithubStatus;
