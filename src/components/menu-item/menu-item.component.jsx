import React from 'react';

const MenuItemComponent = ({title}) => (
  <div className='menu-item'>
    <div className='menu-item-content'>
      <h1 className='menu-item-title'>{title}</h1>
      <span className='menu-item-subtitle'>Shop Now</span>
    </div>
  </div>
);

export default MenuItemComponent;
