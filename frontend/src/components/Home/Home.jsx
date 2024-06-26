import React from 'react';
import './Home.css';
import Header from '../SubComponents/Header/Header';
import Slider from '../SubComponents/Slider/Slider';
import HIW from '../SubComponents/HIW/HIW';
import Contacts from '../SubComponents/Contacts/Contacts';
import Footer from '../SubComponents/Footer/Footer';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Slider />
      <HIW />
      <Contacts />
      <Footer />
    </div>
    
  )
}

export default Home