import React from 'react';
import './header.css';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Header = (props) => (
  <header className='toolbar'>
    <nav className='toolbar__navigation'>
      <div className='toolbar__toggle-button'>
        <DrawerToggleButton click={props.toggle}></DrawerToggleButton>
      </div>
      <div className='toolbar__logo' onClick={() => props.click('Home')}><a>M.E. Price Fine Art</a></div>
      <div className='spacer'></div>
      <div className='toolbar__navigation-items'>
        <ul>
          <li onClick={() => props.click('Home')}><a>Home</a></li>
          <li onClick={() => props.click('Gallery')}><a>Gallery</a></li>
          <li onClick={() => props.click('About')}><a>About</a></li>
          <li onClick={() => props.click('Contact')}><a>Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;