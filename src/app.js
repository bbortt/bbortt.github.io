// @flow
import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

import Header from './container/layout/header';
import Footer from './container/layout/footer';

import Router from './router';

import './app.scss';

type Props = { /* ... */ };

class App extends Component<Props> {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header/>

          <div className="container">
            <Router/>
          </div>

          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
