// @flow
import React, {Component} from 'react';

import './Home.scss';

type Props = { /* ... */ };

class Home extends Component<Props> {
  render() {
    return (
      <div className='Home'>
        <h1>About being me. <small className='text-muted'>Yep, this is me.</small></h1>
        <p>
          Student, Programmer and Performance nerd. <span role='img' aria-label='rocket-icon'>&#128640;</span>
        </p>
      </div>
    );
  }
}

export default Home;
