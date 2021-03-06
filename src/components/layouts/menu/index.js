import React from 'react';
import MenuList from './menu-list';

function Menu() {
  return (
    <div className="left-menu">
      <div className="left-menu__sidebar-btn">
        <i className="fas fa-bars"/>
      </div>
      <div className="left-menu__menu-list">
        <MenuList/>
      </div>
      <div className="left-menu__download">
        <a download className='left-menu__download-btn' href="../../../static/files/afsoon-aslani-98.pdf">
          <i className="fas fa-cloud-download-alt"/>
        </a>
      </div>
    </div>
  )
}

export default Menu;
