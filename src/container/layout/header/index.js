// @flow
import React, {Component} from 'react';

import MaybeActiveLink from '../../../components/layout/maybe-active-link';

import './header.scss';

type Props = { /* ... */ };

class Header extends Component<Props> {
    render() {
        return (
            <div className='header'>
                <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                    <a href='/' className='navbar-brand'><h1>bbortt</h1></a>
                    <button className='navbar-toggler' type='button' data-toggle='collapse'
                            data-target='#navbarTogglerDemo02'
                            aria-controls='navbarTogglerDemo02' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
                        <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
                            <MaybeActiveLink href='/' text='Home'/>
                            <MaybeActiveLink href='/projects' text='Projects'/>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
