import React from 'react';

import './form-input.styles.scss';

const FormInputComponent = ({label, handleChange, ...props}) => {
  const shrinkStyle = props.value.length ? 'shrink' : '';
  return (
    <div className='form-group'>
      <input className='form-input' onChange={handleChange} {...props} />
      {
        label && <label className={`${shrinkStyle} form-input-label`}>{label}</label>
      }
    </div>
  );
};

export default FormInputComponent;
