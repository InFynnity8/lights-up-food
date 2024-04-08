import React from 'react';
import './Contact.css';
import Contacts from '../SubComponents/Contacts/Contacts'
import Footer from '../SubComponents/Footer/Footer'

const Contact = () => {
  return (
    <div className="contact">
      <Contacts style={{ minHeight: '50vh', paddingBottom: '100px'}}/>
      <Footer />
    </div>
  )
}

export default Contact