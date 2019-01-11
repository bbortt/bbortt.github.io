// @flow
import React, {Component} from 'react';

import './Footer.scss';

type Props = { /* ... */ };

class Footer extends Component<Props> {
  render() {
    return (
      <footer className='Footer'>
        <nav className="navbar navbar-dark bg-dark mt-5 fixed-bottom">
          <div className="m-auto navbar-text">
            <span>Hosted Via <a href='https://pages.github.com/'><bold>GitHub</bold> Pages</a></span>
          </div>
        </nav>
      </footer>
    );
  }
}

export default Footer;
