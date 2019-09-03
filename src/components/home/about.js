// @flow
import React, {Component} from 'react';

type Props = { /* ... */ };

class About extends Component<Props> {
    render() {
        return (
            <div className='about'>
                <h2>About me.
                    <small className='text-muted'>Student, Programmer & Performance Nerd.
                        <span role='img' aria-label='rocket-icon' alt='Little rocket.'>&#128640;</span>
                    </small>
                </h2>

                <p>
                    I am currently working at PostFinance AG in Bern while studying computer science at BFH.
                </p>
            </div>
        );
    }
}

export default About;
