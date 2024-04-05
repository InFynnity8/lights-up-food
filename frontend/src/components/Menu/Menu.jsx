import React from 'react';
import './Menu.css';
import Navbar from '../SubComponents/Navbar/Navbar'
import Menus from '../SubComponents/Menus/Menus'
import Footer from '../SubComponents/Footer/Footer'

const Menu = () => {
  return (
    <div>
      <h1>Menu</h1>
      <Navbar />
      <Menus />
      <Footer />
    </div>
  )
}

export default Menu;