// @flow
import React, {Component} from 'react';

import About from '../components/home/about';
import MeFace from '../components/home/me-face';

import Connect from '../components/home/connect';
import KeyList from '../components/home/key-list';

import './home.scss'

type Props = { /* ... */ };

class Home extends Component<Props> {
    render() {
        return (
            <div className='home'>
                <div className='row'>
                    <div className='col-sm-8'>
                        <About/>
                    </div>

                    <div className='col-sm-4'>
                        <MeFace/>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <Connect/>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <KeyList/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
