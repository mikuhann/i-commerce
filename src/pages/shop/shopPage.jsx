import React, { useState } from 'react';

import CollectionComponent from '../../components/collection/collection.component';

import { SHOP_DATA } from '../../constants/shop';

import './shop.styles.scss'

const ShopPage = () => {
  const [shopData, setShopData] = useState(SHOP_DATA);
  return (
    <div>
      {
        shopData.map(({id, ...collection}) => (<CollectionComponent key={id} {...collection} />))
      }
    </div>
  )
};

export default ShopPage;
