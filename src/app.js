// @flow
import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

import Footer from './container/layout/footer';
import Header from './container/layout/header';

import Router from './router';

import './app.scss';

type Props = { /* ... */ };

class App extends Component<Props> {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Header/>

          <div className='container'>
            <Router/>
          </div>

          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
