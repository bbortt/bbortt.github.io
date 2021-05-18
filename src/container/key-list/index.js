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
      href='https://raw.githubusercontent.com/bbortt/bbortt.github.io/development/src/keys/timon.borter@gmx.ch.pub.asc'
      download className='text-underline'>56F2 F201 10FB 2596 02C9  2909 D4D4 5C59 4036 DD74</a>.
    </p>
  </div>
);

export default KeyList;
