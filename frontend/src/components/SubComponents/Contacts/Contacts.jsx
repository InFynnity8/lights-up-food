import React from 'react';
import './Contacts.css';

const Contacts = (props) => {
  return (
    <div className="contacts" style={props.style}>
      <div className="profile">
        <p><span style={{color: 'red'}}>Lights Up Food </span> established in February, 2024 is the best selling kenkey in Kumasi.
        Located at Ayeduase and provides the most authentic Kenkey using only the best and quality 
        ingredients to achieve the great signature taste.</p>
        <p>We provide delivery at a fee.</p>
        <ul className="address">
          <li> <i className="ri-mail-fill" id="iconic"></i> samuelwiafemenu@gmail.com</li>
          <li> <i className="ri-phone-fill" id="iconic"></i> 0534560552 | 0243882071</li>
          <li> <i className="ri-map-pin-2-fill" id="iconic"></i> Ayeduase, Kumasi</li>
          <li> <i className="ri-time-fill" id="iconic"></i> 10:00am - 5:00pm</li>
        </ul>
      </div>
      <form className='contact-form'>
        <h1 style={{ fontFamily: 'Ojuju'}}><span style={{ fontFamily: 'Ojuju'}}>Contact</span> Us</h1>
        <p>Feel free to contact us anytime. We will get back to you as soon as we can!</p>
        <input type="text" name="Name" placeholder="Name"/>
        <input type="email" name="Email" placeholder="Email"/>
        <input type="text" name="Message" placeholder="Message"/>

        <button type="submit" className="send-btn">send</button>
        
      
      </form>
    </div>
  )
}

export default Contacts