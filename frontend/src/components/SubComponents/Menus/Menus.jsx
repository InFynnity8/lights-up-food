import React from 'react';
import './Menus.css';
import MenuCards from '../../../containers/MenuCards/MenuCards';
import Foods from '../../../asserts/menu-data.json'

const Menus = () => {
  return (
    <>
      <h1 className="header">Our <span style={{ fontFamily: 'Ojuju'}}>Special Kenkey</span> Menu</h1>
    
      <ul className="menus">
        {
          Foods.map((food, index)=>{
          return( 
              <MenuCards key={index}  title={food.title} image={food.image} description={food.description} />
          )})
        }
      </ul>
      
    </>
  )
}

export default Menus