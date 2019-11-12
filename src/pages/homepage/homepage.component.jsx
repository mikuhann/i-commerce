import React from 'react';

import './homepage.styles.scss'

const HomePage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='menu-item-content'>
          <h1 className='menu-item-title'>Hats</h1>
          <span className='menu-item-subtitle'>Shop Now</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='menu-item-content'>
          <h1 className='menu-item-title'>Jackets</h1>
          <span className='menu-item-subtitle'>Shop Now</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='menu-item-content'>
          <h1 className='menu-item-title'>Sneakers</h1>
          <span className='menu-item-subtitle'>Shop Now</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='menu-item-content'>
          <h1 className='menu-item-title'>Woman's</h1>
          <span className='menu-item-subtitle'>Shop Now</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='menu-item-content'>
          <h1 className='menu-item-title'>Mans</h1>
          <span className='menu-item-subtitle'>Shop Now</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
