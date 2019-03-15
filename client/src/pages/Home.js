import React, { Fragment } from 'react';

const Homepage = props => {


  return (
    <Fragment>
      <h1>M.E. Price Fine Art</h1>
      <div className='coolboxes'>
        <div className='box1' onClick={() => props.click('Home')}></div>
        <div className='box2' onClick={() => props.click('Gallery')}></div>
        <div className='box3' onClick={() => props.click('About')}></div>
        <div className='box4' onClick={() => props.click('Contact')}></div>
      </div>
      <img src='#' alt='background' />
    </Fragment>
  );
};

export default Homepage;