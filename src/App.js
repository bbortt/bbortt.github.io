// @flow
import React, {Component} from 'react';

import Router from './Router';

import Header from './view/layout/Header/Header';
import Footer from './view/layout/Footer/Footer';

import './App.scss';

type Props = { /* ... */ };

class App extends Component<Props> {
  render() {
    return (
      <div className='App'>
        <Header/>

        <div className='container'>
          <Router/>
        </div>

        <Footer/>
      </div>
    );
  }
}

export default App;
