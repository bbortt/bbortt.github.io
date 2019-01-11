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
            Hosted on <a href='https://pages.github.com/'><span className='text-github'>GitHub <span
            style={{fontWeight: 'normal'}}>Pages</span></span></a>
          </div>
        </nav>
      </footer>
    );
  }
}

export default Footer;
