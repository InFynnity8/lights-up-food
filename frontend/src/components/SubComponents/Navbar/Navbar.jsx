import React, {useState, useEffect} from 'react';
import './Navbar.css';
import { Link, Outlet , useLocation} from "react-router-dom";





const Navbar = () => {
  const [navigatorColor, setNavigatorColor] = useState('black');
  const [navbarColor, setNavbarColor] = useState('white');
  const [navLinkColor, setNavLinkColor] = useState('black');
  const location = useLocation();
  
  useEffect( () => {
    if(location.pathname === '/menu/order') {
      document.querySelector('.navigator').classList.add("menu-order-path")
    }
  },[])
  
  console.log(location.pathname )
 
  const handleNavColor = (path) => {
    console.log(path)
      if (path === 'home' || path === 'contact'){
        setNavigatorColor('black')
        setNavbarColor('white')
        setNavLinkColor('black')
      }else if(path === 'menu' || path === 'menu/order'){
        setNavigatorColor('white')
        setNavbarColor('black')
        setNavLinkColor('white')
      }
  }

  return (
    <div className="navigator" style={{backgroundColor: navigatorColor} } >
    
    
      <div className="navbar-main">
       
          <ul style={{backgroundColor: navbarColor} }>
          <div className="logo">
              <div className="logo-inner"><h1>Lights Up  
              <span style={{color: 'yellow', fontSize: '23px', fontWeight: '900'}}> FOOD</span></h1></div>
            </div>
            <li><Link style={{color: navLinkColor} } to="/"  className='nav-link' onClick={() => handleNavColor('home')}>Home</Link></li>
            <li><Link style={{color: navLinkColor} } to="/menu" className='nav-link' onClick={() => handleNavColor('menu')}>Menu</Link></li>
            <li><Link style={{color: navLinkColor} } to="/contact" className='nav-link' onClick={() => handleNavColor('contact')}>Contact Us</Link></li>
          </ul>
      </div>

        <Outlet />

    </div>

  );
};

export default Navbar;