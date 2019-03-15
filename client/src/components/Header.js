import React from 'react';

const Header = (props) => (
  <header>
    <nav>
      <div></div>
      <div>M.E. Price Fine Art</div>
      <div>
        <ul>
          <li onClick={() => props.click('Home')}>Home</li>
          <li onClick={() => props.click('Gallery')}>Gallery</li>
          <li onClick={() => props.click('About')}>About</li>
          <li onClick={() => props.click('Contact')}>Contact</li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;