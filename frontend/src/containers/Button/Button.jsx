import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const Button = (props) => {
  return (
   
     <Link to ="/menu/order" id='linked-btn'> <button type="submit" className="order-btn" >{props.name}</button></Link>

  )
}

export default Button