import React from 'react';
import './App.css';//importing universal css 
import {BrowserRouter as Router, Routes,  Route} from 'react-router-dom';
import Home from './pages/Home.js'
import ContactPage from './pages/ContactPage.js';
import AccountPage from './pages/AccountPage.js';
import CookingessentialsProductPage from './pages/CookingessentialsProductPage.js';
// import Contact from './components/Contact/Contact';

function App(){
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={ <ContactPage />} />
        <Route exact path="/account" element={ <AccountPage />} />
        <Route exact path="/cookingessentials" element={ <CookingessentialsProductPage />} />
        {/* <Route exact path="/dryfruitsandsuperfoods" element={ <ProductsPage />} /> */}
      </Routes>
    </Router>
  );
};
export default App;