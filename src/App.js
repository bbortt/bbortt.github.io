// @flow
import React, {Component} from 'react';

import Home from './view/Home';

import './App.scss';

type Props = { /* ... */ };

class App extends Component<Props> {
  render() {
    return (
      <div className='App'>
        <div className='container'>
          <Home/>
        </div>
      </div>
    );
  }
}

export default App;
