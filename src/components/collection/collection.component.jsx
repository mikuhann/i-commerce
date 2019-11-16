import React from 'react';

import CollectionItemComponent from '../collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionComponent = ({title, items, route}) => (
  <div className='collection'>
    <h2 className='collection-title'>{title}</h2>
    <div className='collection-items'>
      {
        items
          .filter((item, index) => index < 4)
          .map(({...item}) => (<CollectionItemComponent key={item.id} {...item} />))
      }
    </div>
  </div>
);

export default CollectionComponent;