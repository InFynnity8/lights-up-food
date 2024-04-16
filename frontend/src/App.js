import React from 'react';
import  {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home.jsx';
import Menu from './components/Menu/Menu.jsx';
import Order from './components/Order/Order.jsx';
import Contact from './components/Contact/Contact.jsx';
import Nopage from './components/Nopage/Nopage.jsx';
import Navbar from './components/SubComponents/Navbar/Navbar.jsx';

const App = () => {
  return (
   <div >

        <BrowserRouter>
          <Routes>
            <Route  path="/" element={<Navbar />}>
              <Route index  element={<Home />}/>
              <Route path= "/menu" element={<Menu />} />
              <Route path="/menu/order" element={<Order />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Nopage />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;