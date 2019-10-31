// @flow
import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom';

import Header from './container/layout/header';
import Footer from './container/layout/footer';

import Router from './router';

import './app.scss';

type Props = { /* ... */ };

class App extends Component<Props> {
    render() {
        return (
            <div className='app'>
                <HashRouter>
                    <Header/>

                    <div className='container'>
                        <Router/>
                    </div>

                    <Footer/>
                </HashRouter>
            </div>
        );
    }
}

export default App;
