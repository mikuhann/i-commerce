import React from 'react';

import './button.styles.scss';

const ButtonComponent = ({children, isGoogle, ...props}) => {
  return (
    <button className={`${isGoogle ? 'google-button' : '' } button`} {...props}>
      {children}
    </button>
  );
};

export default ButtonComponent;
