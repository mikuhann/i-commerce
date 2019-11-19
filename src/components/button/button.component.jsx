import React from 'react';

import './button.styles.scss';

const ButtonComponent = ({children, ...props}) => {
  return (
    <button className='button' {...props}>
      {children}
    </button>
  );
};

export default ButtonComponent;
