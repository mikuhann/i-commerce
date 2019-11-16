import React, { useState } from 'react';

import { SHOP_DATA } from '../../constants/shop';

import './shop.styles.scss'

const ShopPage = () => {
  const [shopData, setShopData] = useState(SHOP_DATA);
  return (
    <div>
      ShopPage
    </div>
  )
};

export default ShopPage;
