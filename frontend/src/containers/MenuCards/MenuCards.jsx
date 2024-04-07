import React from 'react';
import './MenuCards.css';
import Button from '../Button/Button'

const MenuCards = (props) => {
  return (
        <li className="card">
          <div className="img"><img src={props.image} alt="" draggable="false" /></div>
          <h2 style={{ color: 'rgb(31, 30, 30)', fontWeight: 'bold' }}>{props.title}</h2>
          <p style={{ padding: '0px 30px',textAlign: 'center', height: '140px', overflowY: 'Auto'}}>{props.description}</p>
          <Button name="Order now" />
        </li>

  )
}

export default MenuCards