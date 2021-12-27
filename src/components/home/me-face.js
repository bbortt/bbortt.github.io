// @flow
import React, {Component} from 'react';

import meFace from '../../assets/images/IMG_20190416_100232_1.jpg';

import './me-face.scss';

type Props = { /* ... */ }

class MeFace extends Component<Props> {
  render() {
    return (
      <div className="me-face">
        <img id="me-face" className="img-fluid rounded align-self-center" alt="This is me face." src={meFace}/>
        <p>Yes, this is me face &uarr;</p>
      </div>
    )
  }
}

export default MeFace;
