// @flow
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import heroBackgroundJpg from '../../assets/images/hero-background.jpg';
import heroBackgroundWebp from '../../assets/images/hero-background.webp';

import './hero.scss';

type Props = { /* ... */ };

const Hero: Component<Props> = () => (
  <div className="hero">
    <picture>
      <source srcSet={heroBackgroundWebp} type="image/webp"/>
      <img className="hero-background" src={heroBackgroundJpg} alt=""
           fetchPriority="high" decoding="async"/>
    </picture>

    <div className="hero-content">
      <p className="hero-eyebrow">Borter Labs</p>
      <h1 className="hero-title">Timon Borter</h1>
      <p className="hero-tagline">
        Software engineer at PostFinance, conference speaker, and founder of Borter Labs
        &mdash; building Snow-White, an open-source ground-truth guardrail for API testing.
      </p>

      <div className="hero-actions">
        <Link to="/projects" className="btn btn-light hero-btn">View Projects</Link>
        <Link to="/snow-white" className="btn btn-outline-light hero-btn">Snow-White</Link>
      </div>
    </div>
  </div>
);

export default Hero;
