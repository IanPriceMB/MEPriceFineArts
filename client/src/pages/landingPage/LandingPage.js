import  React, { Fragment } from 'react';
import {NavLink} from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  let pageLayout = (
    <Fragment>
      <h1>The Art of M . E . Price</h1>
      <NavLink to='/home'><div className='c' data-text='Gallery'></div></NavLink>
      <div className='m' data-text='About'><NavLink to='/about'></NavLink></div>
      <div className='y' data-text='Contact'><NavLink to='/contact'></NavLink></div>
      <div className='k' data-text='Man'><NavLink to='/home'></NavLink></div>
    </Fragment>
  )
  return pageLayout
};

export default LandingPage;