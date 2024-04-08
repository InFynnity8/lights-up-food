import React from 'react';
import './Header.css';
import {Link, Outlet} from 'react-router-dom';

const Header = () => {
  return (
    <div className="head">

      <div className="intro">
        <h1>Savor the Moment with Hot and Delicious <span style={{color: 'yellow'}}>Kenkey</span> - <span style={{color: 'red'}}>Fast Delivery </span> to Your Doorstep!</h1>
        <p>Satisfy your craving in just few clicks, delicious kenkey delivered straight to your doorstep. </p>
        <div className="buttons">
          <Link to="/menu/order"><button type="button" className="order-btn-2">order now</button></Link>
          <Link to="/menu" ><button type="button" className="menu-btn">view menu</button></Link>
        </div>
      </div>


      <div className="cheers-img">
        <img src="/" alt="image"/>
      </div>
      <Outlet/>
    </div>
  )
}

export default Header