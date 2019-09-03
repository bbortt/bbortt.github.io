// @flow
import React, {Component} from 'react';

import * as key from '../../keys/timon_borter.asc';

type Props = { /* ... */ };

class KeyList extends Component<Props> {
  render() {
    return (
      <div className='key-list'>
        <h2>Secure the internet. <small className='text-muted'>Sign your content!</small></h2>

        <p>
          My GPG Fingerprint: <a href={key} className='text-underline'>AD1C 31DD 0E4E CA51 8621 1131 5571 6D6C
          12B6 6B41</a>.
        </p>
      </div>
    );
  }
}

export default KeyList;
