// @flow
import React, {Component} from 'react';
import Loadable from 'react-loadable';

import About from '../components/home/about';
import KeyList from '../components/home/key-list';

type Props = { /* ... */ };

class Home extends Component<Props> {
  render() {
    return (
      <div className='home'>
        <About/>
        <KeyList/>
      </div>
    );
  }
}

export default Loadable({
  loader: () => Promise.resolve(Home),
  loading: () => <div>Loading...</div>
});
