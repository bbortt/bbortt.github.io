// @flow
import React, {Component} from 'react';

type Props = { /* ... */ };

export const Footer: Component<Props> = () => (
  <footer className='footer navbar navbar-dark bg-dark mt-5 fixed-bottom'>
    <div className='m-auto navbar-text'>
      Hosted on <a href='https://pages.github.com/'><span className='text-github'>GitHub <span
      style={{fontWeight: 'normal'}}>Pages</span></span></a>
    </div>
  </footer>
);

export default Footer;
