// @flow
import React, {Component} from 'react';

type Props = { /* ... */ };

export const KeyList: Component<Props> = () => (
  <div className="key-list">
    <h2>Publications.&nbsp;
      <small className="text-muted">Interesting (probably) things I have written.</small>
    </h2>

    <br/>

    <h3>2023</h3>
    <h4><i>Web-based Natural Language Interface for databases</i></h4>

    <p>This thesis deals with the construction of an interface between natural language to databases. This is especially
      useful for people who do not know technical query languages.</p>

    <a
      href="https://raw.githubusercontent.com/bbortt/bbortt.github.io/development/src/assets/publications/20230116_bfhthesis.pdf"
      download className="text-underline">Webbasiertes Natural Language Interface für Datenbanken [German]</a>
  </div>
);

export default KeyList;
