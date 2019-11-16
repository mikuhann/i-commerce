import React, { useState } from 'react';

import MenuItemComponent from '../menu-item/menu-item.component';

import { DIRECTORIES } from '../../constants/directories';

import './directory.styles.scss';

const DirectoryComponent = () => {
  const [directory, setDirectory] = useState(DIRECTORIES);
  return (
    <div className='directory-menu'>
      {directory.map(({id, ...directoryProps}) => (
        <MenuItemComponent key={id} { ...directoryProps } />
      ))}
    </div>
  );
};

export default DirectoryComponent;
