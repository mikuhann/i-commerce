import React from 'react';

import './menu-item.styles.scss';

const MenuItemComponent = ({ title, imageUrl, size }) => (
  <div
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
    className={`menu-item ${size ? size : ''}`}>
    <div className='menu-item-content'>
      <h1 className='menu-item-title'>{ title }</h1>
      <span className='menu-item-subtitle'>Shop Now</span>
    </div>
  </div>
);

export default MenuItemComponent;
