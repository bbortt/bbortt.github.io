// @flow
import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

import Footer from './view/layout/Footer/Footer';
import Header from './view/layout/Header/Header';

import Router from './Router';

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
