// @flow
import React, {Component} from 'react';

import About from '../../components/home/about';
import GithubStatus from '../../components/home/github-status';
import MeFace from '../../components/home/me-face';

import './home.scss'

type Props = { /* ... */ };

export const Home: Component<Props> = () => (
  <div className="home">
    <div className="row align-items-center">
      <div className="col-sm-8 ">
        <About/>

        <GithubStatus/>
      </div>

      <div className="col-sm-4">
        <MeFace/>
      </div>
    </div>
  </div>
);

export default Home;
