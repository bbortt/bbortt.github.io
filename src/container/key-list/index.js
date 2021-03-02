// @flow
import React, {Component} from 'react';

import * as key from '../../keys/timon_borter.asc';

type Props = { /* ... */ };

class KeyList extends Component<Props> {
  render() {
    return (
      <div className='key-list'>
        <h2>Secure the internet.&nbsp;
          <small className='text-muted'>Sign your content!</small>
        </h2>

        <p>
          My GPG Fingerprint: <a href={key} className='text-underline'>624D F4DC 4729 9F8C 273A CDF3 EA08 2DF7
          4988 780F</a>.
        </p>
      </div>
    );
  }
}

export default KeyList;
