import React from 'react';
import './App.css';
import Home from './components/Home/Home.jsx';
import Contact from './components/Contact/Contact.jsx';
import Menu from './components/Menu/Menu.jsx';

const App = () => {
  return (
    <div>
        <Home />
        <Menu />
        <Contact />
    </div>
  )
}

export default App;