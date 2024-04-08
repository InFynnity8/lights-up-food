import React from 'react';
import './Menu.css';
import Menus from '../SubComponents/Menus/Menus'
import Footer from '../SubComponents/Footer/Footer'

const Menu = () => {
  return (
    <div className="menu">
      <Menus />
      <Footer />
    </div>
  )
}

export default Menu;