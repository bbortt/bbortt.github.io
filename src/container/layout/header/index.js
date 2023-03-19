// @flow
import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import MaybeActiveLink from '../../../components/layout/maybe-active-link';

import './header.scss';

type Props = { /* ... */ };

export const Header: Component<Props> = () => (
  <div className="header">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className='container'>
        <NavLink to="/" className="nav-link navbar-brand">
          <h1>bbortt</h1>
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <MaybeActiveLink href="/" text="Home"/>
            <MaybeActiveLink href="/projects" text="Projects"/>
            <MaybeActiveLink href="/publications" text="Publications"/>
            <MaybeActiveLink href="/social" text="Social"/>
            <MaybeActiveLink href="/pgp" text="PGP"/>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
