import React from 'react';
import './Footer.css';
import { Link} from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer">

      <div className="social">
        <div className="logo">
          <div className="logo-inner"><h1>Lights Up  
          <span style={{color: 'yellow', fontSize: '23px', fontWeight: '900'}}> FOOD</span></h1></div>
        </div>
        <p>Explore endless culinary delights with our website. 
        Delicious eats at your fingertips. <br/> Order now</p>
        <div className="icons">icons</div>
      </div>

      <div className="links">
        <h4>Links</h4>
        <Link to="/" style={{textDecoration: 'none', color: 'grey', fontWeight: '600' }}>Home</Link><br/>
        <Link to="/menu" style={{textDecoration: 'none',color: 'grey', fontWeight: '600'}}>Menu</Link><br/>
        <Link to="/contact" style={{textDecoration: 'none',color: 'grey', fontWeight: '600'}}>Contact Us</Link>
    
      </div>

      <div className="address">
          <h4>Address</h4>
          <p>Ayeduase, Kumasi</p>
          <p>lightsupfood@gmail.com</p>
          <p>0534560552 | 0243882071</p>
    
      </div>
    </div>
  )
}

export default Footer