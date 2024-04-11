import React from 'react';
import './Menus.css';
import MenuCards from '../../../containers/MenuCards/MenuCards';
import {menuData} from '../../../asserts/menu-data.js'

const Menus = () => {
  return (
    <>
      <h1 className="header">Our <span style={{ fontFamily: 'Ojuju'}}>Special Kenkey</span> Menu</h1>
    
      <ul className="menus">
        {
          menuData.map((food, index)=>{
          return( 
              <MenuCards key={index}  title={food.title + "-₵" + food.price} image={food.image} description={food.description} />
          )})
        }
      </ul>
      
    </>
  )
}

export default Menus