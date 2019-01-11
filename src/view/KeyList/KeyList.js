// @flow
import React, {Component} from 'react';

import * as key from '../../keys/timon_borter.asc';

import './KeyList.scss';

type Props = { /* ... */ };

class KeyList extends Component<Props> {
  render() {
    return (
      <div className='KeyList'>
        <h1>Secure the internet. <small className='text-muted'>Sign your content!</small></h1>

        <p>
          My GPG Fingerprint: <a href={key} className='text-underline'>AD1C 31DD 0E4E CA51 8621 1131 5571 6D6C 12B6 6B41</a>.
        </p>
      </div>
    );
  }
}

export default KeyList;
