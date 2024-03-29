// @flow
import React, {Component} from 'react';

import {NavLink} from 'react-router-dom';

import './maybe-active-link.scss';

type Props = {
  href: string,
  text: string
};

class MaybeActiveLink extends Component<Props> {
  render() {
    const {href, text} = this.props;

    return (
      <div className="maybe-active-link">
        <li className="nav-item">
          <NavLink to={href} className={({isActive}) => `nav-link ${isActive && 'active'}`}>
            {text}
          </NavLink>
        </li>
      </div>
    )
  }
}

export default MaybeActiveLink;
