import React from 'react';

import classes from './Modal.css';

const modal = (props) => (
  <div className={classes.Modal}
    style={{
      transform: props.ordered ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: props.ordered ? '1' : '0'
    }}>
    {props.children}
  </div>
);

export default modal;
