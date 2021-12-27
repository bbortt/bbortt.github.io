// @flow
import React, {Component} from 'react';

import github from '../../assets/social/GitHub-Mark-120px-plus.png';
import twitter from '../../assets/social/Twitter_Social_Icon_Circle_Color.png';

import './social.scss'

type Props = { /* ... */ };

export const Social: Component<Props> = () => (
  <div className="social">
    <h2>Connect.&nbsp;
      <small className="text-muted">Visit me on my pages.</small>
    </h2>

    <a href="https://github.com/bbortt" className="social-mark-container">
      <img className="social-mark" src={github} alt="GitHub mark."/>
    </a>

    <a href="https://twitter.com/timon_borter" className="social-mark-container">
      <img className="social-mark" src={twitter} alt="Twitter mark."/>
    </a>
  </div>
);

export default Social;
