import React from 'react';
import './Home.css';
import Navbar from '../SubComponents/Navbar/Navbar';
import Header from '../SubComponents/Header/Header';
import Slider from '../SubComponents/Slider/Slider';
import HIW from '../SubComponents/HIW/HIW';
import Contacts from '../SubComponents/Contacts/Contacts';
import Footer from '../SubComponents/Footer/Footer';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Navbar />
      <Header />
      <Slider />
      <HIW />
      <Contacts />
      <Footer />
    </div>
    
  )
}

export default Home