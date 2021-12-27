// @flow
import React, {Component} from 'react';

import Project from '../../components/projects/project'

type Props = { /* ... */ };

export const Projects: Component<Props> = () => (
  <div className="projects">
    <h2>Projects <small className="text-muted">I maintain.</small></h2>
    <Project title="@bbortt/owl"
             link="https://github.com/bbortt/owl"
             description="GIT hooks made easy."/>
    <Project title="@mat-datetimepicker" link="https://github.com/kuhnroyal/mat-datetimepicker"
             description="Material datetimepicker for @angular/material."/>
    <Project title="bbortt/event-planner" link="https://github.com/bbortt/event-planner"
             description="Event Planning Tool."/>

    <br/>

    <h2>Stuff <small className="text-muted">I'm working on.</small></h2>
    <Project title="@postfinance/ngx-ace-editor-wrapper"
             link="https://github.com/postfinance/ngx-ace-editor-wrapper"
             description="Ace editor integration with TypeScript for Angular."/>
    <Project title="@postfinance/polling-swagger-ui"
             link="https://github.com/postfinance/polling-swagger-ui"
             description="Ace editor integration with TypeScript for Angular."/>
    <Project title="vercel/next.js" link="https://github.com/vercel/next.js"
             description="The React framework." detail="Previously zeit/next.js."/>
    <Project title="citrusframework/citrus"
             link="https://github.com/citrusframework/citrus"
             description="Framework for automated integration tests with focus on messaging integration."/>
    <Project title="citrusframework/citrus-simulator"
             link="https://github.com/citrusframework/citrus-simulator"
             description="Standalone simulator for different messaging transports."/>
    <Project title="angular/angular" link="https://github.com/angular/angular"
             description="One framework. Mobile & desktop."
             detail="And various other Angular related packages."/>

    <br/>

    <h2>Others <small className="text-muted">That reached EOL.</small></h2>
    <Project title="@postfinance/ngx-material-file-input"
             link="https://github.com/postfinance/ngx-material-file-input"
             description="Redux-Saga (alternative side effect model for Redux) integration for Next.js."
             detail="No longer maintained."/>
    <Project title="bmealhouse/next-redux-saga" link="https://github.com/bmealhouse/next-redux-saga"
             description="Redux-Saga (alternative side effect model for Redux) integration for Next.js."
             detail="No longer maintained."/>
    <Project title="tbmelabs/tbme-tv" link="https://github.com/tbmelabs/tbme-tv"
             description="An open source streaming application."
             detail="Project archived (read-only), no more supporters."/>

    <br/>

    <p>
      Visit me on <a href="https://github.com/bbortt"><span className="text-github">GitHub</span></a>. I
      would love to collaborate with you!
    </p>
  </div>
);

export default Projects;
