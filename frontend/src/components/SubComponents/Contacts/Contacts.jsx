import React from 'react';
import './Contacts.css';

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="profile">
      
      </div>
      <form>
        <h1><span>Contact</span> Us</h1>
        <p>Feel free to contact us anytime. We will get back to you as soon as we can!</p>
        <label>Name</label>
        <input type="text" name="text"></input>
        <label>Email</label>
        <input type="text" name="text"></input>
        <label>Message</label>
        <input type="text" name="text"></input>

        <button type="submit">send</button>
        
      
      </form>
    </div>
  )
}

export default Contacts