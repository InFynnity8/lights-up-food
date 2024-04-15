import React, {useState, useEffect} from 'react';
import './Navbar.css';
import { Link, Outlet , useLocation} from "react-router-dom";





const Navbar = () => {
  const [navigatorColor, setNavigatorColor] = useState('black');
  const [navbarColor, setNavbarColor] = useState('white');
  const [navLinkColor, setNavLinkColor] = useState('black');
  const [navPath, setNavPath] = useState('/');
  const location = useLocation();
  
  useEffect( () => {
    setNavPath(location.pathname)
    if(location.pathname === '/menu/order') {
      document.querySelector('.navigator').classList.add("menu-order-path")
    }
  },[navPath])
  
  console.log(location.pathname)
 
  const handleNavColor = () => {
    console.log(navPath)
      if (navPath === '/' || navPath === '/contact'){
        setNavigatorColor('black')
        setNavbarColor('white')
        setNavLinkColor('black')
        console.log('black')
      }else if(navPath === '/menu' || navPath === '/menu/order'){
        setNavigatorColor('white')
        setNavbarColor('black')
        setNavLinkColor('white')
        console.log('white')
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
            <li><Link style={{color: navLinkColor} } to="/"  className='nav-link' onClick={handleNavColor}>Home</Link></li>
            <li><Link style={{color: navLinkColor} } to="/menu" className='nav-link' onClick={handleNavColor}>Menu</Link></li>
            <li><Link style={{color: navLinkColor} } to="/contact" className='nav-link' onClick={handleNavColor}>Contact Us</Link></li>
          </ul>

          <div className='toggler' title="Menu"><i className="ri-menu-3-line"></i></div>
      </div>

        <Outlet />

    </div>

  );
};

export default Navbar;