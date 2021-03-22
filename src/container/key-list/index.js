// @flow
import React, {Component} from 'react';

type Props = { /* ... */ };

export const KeyList: Component<Props> = () => (
  <div className='key-list'>
    <h2>Secure the internet.&nbsp;
      <small className='text-muted'>Sign your content!</small>
    </h2>

    <p>
      My GPG Fingerprint: <a
      href='https://raw.githubusercontent.com/bbortt/bbortt.github.io/development/src/keys/timon_borter.asc'
      download className='text-underline'>624D F4DC 4729 9F8C 273A CDF3 EA08 2DF7 4988 780F</a>.
    </p>
  </div>
);

export default KeyList;
