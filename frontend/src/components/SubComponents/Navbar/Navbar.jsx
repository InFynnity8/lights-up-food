import React, {useState, useEffect} from 'react';
import './Navbar.css';
import { Link, Outlet , useLocation} from "react-router-dom";





const Navbar = () => {
  const [menuHeight, setMenuHeight] = useState('translateY(-100%)');
  const [navigatorColor, setNavigatorColor] = useState('black');
  const [navbarColor, setNavbarColor] = useState('white');
  const [navDisplay, setNavDisplay] = useState('');
  const [navLinkColor, setNavLinkColor] = useState('black');
  const location = useLocation();
 
  
  useEffect( () => {
    console.log(location.pathname)
    handleNavColor()
  },[location.pathname])

 
  const handleNavColor = () => {
      if (location.pathname === '/' || location.pathname === '/contact'){
        setNavigatorColor('black')
        setNavbarColor('white')
        setNavLinkColor('black')
        setNavDisplay('inline-block')
      }else if(location.pathname === '/menu'){
        setNavigatorColor('white')
        setNavbarColor('black')
        setNavLinkColor('white')
        setNavDisplay('inline-block') 
      }else if(location.pathname === '/menu/order'){
        setNavigatorColor('white')
        setNavbarColor('black')
        setNavLinkColor('white')
        setNavDisplay('none')
      }
  }

  const toggleMenu=()=> {
    const closeBtn = document.querySelector('.ri-close-fill');
    const menuBtn = document.querySelector('.ri-menu-3-line');
    menuBtn.classList.add('toggled');
    closeBtn.classList.add('toggled');
    setMenuHeight('translateY(0)');
  }
  const toggleClose=()=> {
    const closeBtn = document.querySelector('.ri-close-fill');
    const menuBtn = document.querySelector('.ri-menu-3-line');
    menuBtn.classList.remove('toggled')
    closeBtn.classList.remove('toggled')
    setMenuHeight('translateY(-100%)');
  }

  return (
    <div className="navigator" style={{backgroundColor: navigatorColor} } >
    
    
      <div className="navbar-main" style={{display: navDisplay} } >
       
          <ul style={{backgroundColor: navbarColor} } className="desktop-menu">
            <div className="logo">
              <div className="logo-inner"><h1>Lights Up  
              <span style={{color: 'yellow', fontSize: '23px', fontWeight: '900'}}> FOOD</span></h1></div>
            </div>
            <li><Link style={{color: navLinkColor} } to="/"  className='nav-link' >Home</Link></li>
            <li><Link style={{color: navLinkColor} } to="/menu" className='nav-link'>Menu</Link></li>
            <li><Link style={{color: navLinkColor} } to="/contact" className='nav-link' >Contact Us</Link></li>
          </ul>

          <div className='toggler' title="Menu"  style={{color: navbarColor} }>
            <i className="ri-menu-3-line" onClick={toggleMenu}></i>
            <i className="ri-close-fill" onClick={toggleClose}></i>  
          </div>
        
      </div>
        <ul className="responsive-menu" style={{transform: menuHeight}}>
          <div className='toggler' title="Menu">
            <i className="ri-close-fill toggled" onClick={toggleClose}></i>  
          </div> 
          <li><Link  to="/"  className='nav-link-res' onClick={toggleClose}>Home</Link></li>
          <li><Link  to="/menu" className='nav-link-res' onClick={toggleClose}>Menu</Link></li>
          <li><Link  to="/contact" className='nav-link-res' onClick={toggleClose}>Contact Us</Link></li>
          <div className="logo">
              <div className="logo-inner"><h1>Lights Up  
              <span style={{color: 'yellow', fontSize: '23px', fontWeight: '900'}}> FOOD</span></h1></div>
          </div>
        </ul>

        <Outlet />

    </div>

  );
};

export default Navbar;