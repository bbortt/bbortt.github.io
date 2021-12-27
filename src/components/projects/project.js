// @flow
import React, {Component} from 'react';

import './project.scss';

type Props = {
  title: string,
  description: string,
  link: ?string,
  detail: ?string
}

class Project extends Component<Props> {
  render() {
    const {title, description, link, detail} = this.props;

    return (
      <div className="project">
        <div className="row">
          <div className="col-sm-4">
            {link ? <a href={link}>{title}</a> : title}
          </div>
          <div className="col text-italic">
            {description}
          </div>
        </div>

        {
          detail ? (
            <div className="row">
              <div className="col-sm-4"/>
              <div className="col text-muted text-italic">
                {detail}
              </div>
            </div>
          ) : null
        }
      </div>
    )
  }
}

export default Project;
