import React from 'react';
import './Navbar.css';
import { Link, Outlet } from "react-router-dom";

// var prevScrollpos = window.scrollY;
// window.onscroll = () => {
//   var currentScrollpos = window.scrollY;
//   if (prevScrollpos > currentScrollpos) {
//     document.querySelector('.navbar-main').style.top = "0";
//   } else {
//     document.querySelector('.navbar-main').style.top = "-50px";
//   }

//   prevScrollpos = currentScrollpos;
// }



const Navbar = () => {
  return (
    <div className="navigator">
    
    
      <div className="navbar-main">
       
          <ul>
          <div className="logo">
              <div className="logo-inner"><h1>Lights Up  
              <span style={{color: 'yellow', fontSize: '23px', fontWeight: '900'}}> FOOD</span></h1></div>
            </div>
            <li><Link to="/" style={{textDecoration: 'none', color: 'black', fontWeight: '600' }}>Home</Link></li>
            <li><Link to="/menu" style={{textDecoration: 'none',color: 'black', fontWeight: '600'}}>Menu</Link></li>
            <li><Link to="/contact" style={{textDecoration: 'none',color: 'black', fontWeight: '600'}}>Contact Us</Link></li>
          </ul>
      </div>

        <Outlet />

    </div>

  );
};

export default Navbar;