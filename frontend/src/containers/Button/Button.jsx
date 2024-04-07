import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
   
      <button type="submit" className="order-btn" >{props.name}</button>

  )
}

export default Button