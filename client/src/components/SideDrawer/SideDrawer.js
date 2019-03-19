import React from 'react';
import './SideDrawer.css';

const SideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if(props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
  <nav className={drawerClasses}>
    <ul>
      <li><a>Home</a></li>
      <li><a>Gallery</a></li>
      <li><a>About</a></li>
      <li><a>Contact</a></li>
    </ul>
  </nav>
  )
};

export default SideDrawer;