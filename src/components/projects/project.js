// @flow
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './project.scss';

type Props = {
  title: string,
  description: string,
  link: ?string,
  detail: ?string,
  to: ?string,
  featured: ?boolean
}

class Project extends Component<Props> {
  render() {
    const {title, description, link, detail, to, featured} = this.props;

    return (
      <div className={`project${featured ? ' project-featured' : ''}`}>
        <div className="project-header">
          <h3 className="project-title">
            {to ? <Link to={to}>{title}</Link> : (link ? <a href={link}>{title}</a> : title)}
          </h3>

          {
            to && link ? (
              <a href={link} className="project-external-link">GitHub &#8599;</a>
            ) : null
          }
        </div>

        <p className="project-description">{description}</p>

        {
          detail ? (
            <p className="project-detail text-muted">{detail}</p>
          ) : null
        }
      </div>
    )
  }
}

export default Project;
