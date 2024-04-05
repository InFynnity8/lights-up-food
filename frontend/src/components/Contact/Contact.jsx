import React from 'react';
import './Contact.css';
import Navbar from '../SubComponents/Navbar/Navbar'
import Contacts from '../SubComponents/Contacts/Contacts'
import Footer from '../SubComponents/Footer/Footer'

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <Navbar />
      <Contacts />
      <Footer />
    </div>
  )
}

export default Contact