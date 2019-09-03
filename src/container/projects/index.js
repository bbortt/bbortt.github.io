// @flow
import React, {Component} from 'react';

import Project from '../../components/projects/project'

type Props = { /* ... */ };

class Projects extends Component<Props> {
    render() {
        return (
            <div className='projects'>
                <h2>Projects. <small className='text-muted'>Think open.</small></h2>

                <Project title='zeit/next.js' link='https://github.com/zeit/next.js'
                         description='The React framework.'/>
                <Project title='citrusframework/citrus-simulator'
                         link='https://github.com/citrusframework/citrus-simulator'
                         description='Standalone simulator for different messaging transports.'/>
                <Project title='bmealhouse/next-redux-saga' link='https://github.com/bmealhouse/next-redux-saga'
                         description='Redux-Saga (alternative side effect model for Redux) integration for Next.js.'/>
                <Project title='angular/angular' link='https://github.com/angular/angular'
                         description='One framework. Mobile & desktop.'
                         detail='And various other Angular related packages.'/>
                <Project title='tbmelabs/tbme-tv' link='https://github.com/tbmelabs/tbme-tv'
                         description='An open source streaming application.'
                         detail='Project archived (read-only), no more supporters.'/>

                <p>
                    Visit me on <a href='https://github.com/bbortt'><span className='text-github'>GitHub</span></a>. I
                    would love to collaborate with you!
                </p>
            </div>
        );
    }
}

export default Projects;
