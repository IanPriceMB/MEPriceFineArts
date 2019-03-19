import React from 'react';
import './Backdrop.css';

const Backdrop = props => (
  <div onClick={props.click} className='backdrop' />
);

export default Backdrop;