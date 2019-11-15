import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItemComponent = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <div className={`menu-item ${size ? size : ''}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div style={{
      backgroundImage: `url(${imageUrl})`
    }} className='menu-item-background-image' />
    <div className='menu-item-content'>
      <h1 className='menu-item-title'>{ title }</h1>
      <span className='menu-item-subtitle'>Shop Now</span>
    </div>
  </div>
);

export default withRouter(MenuItemComponent);
