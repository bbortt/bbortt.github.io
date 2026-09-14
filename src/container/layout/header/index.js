// @flow
import React, {Component, useEffect, useRef, useState} from 'react';
import {NavLink} from 'react-router-dom';

import MaybeActiveLink from '../../../components/layout/maybe-active-link';

import './header.scss';

type Props = { /* ... */ };

export const Header: Component<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const element = headerRef.current;
    if (!element) {
      return;
    }

    const updateHeight = () => {
      document.documentElement.style.setProperty('--header-height', `${element.offsetHeight}px`);
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavLink to="/" className="navbar-brand" onClick={() => setIsOpen(false)}>
            <span className="navbar-brand-title">Borter Labs</span>
            <span className="navbar-brand-subtitle">Timon Borter</span>
          </NavLink>
          <button className="navbar-toggler" type="button"
                  aria-controls="primary-navigation" aria-expanded={isOpen} aria-label="Toggle navigation"
                  onClick={() => setIsOpen((open) => !open)}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="primary-navigation">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0" onClick={() => setIsOpen(false)}>
              <MaybeActiveLink href="/" text="Home"/>
              <MaybeActiveLink href="/projects" text="Projects"/>
              <MaybeActiveLink href="/snow-white" text="Snow-White"/>
              <MaybeActiveLink href="/talks" text="Talks"/>
              <MaybeActiveLink href="/publications" text="Publications"/>
              <MaybeActiveLink href="/social" text="Social"/>
              <MaybeActiveLink href="/pgp" text="PGP"/>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
