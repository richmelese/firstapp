//import logo from './logo.svg';
import { Routes, Route, Form } from 'react-router-dom';
import React, { useEffect } from 'react';

// import Home from "./pages/Home";
// import slider from './pages/slider';
import Menu from "./Components/Menu";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
// import Item from './pages/Item';
// import 'bootstrap/dist/css/bootstrap.min.css';


// import Header from './Components/Header';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Contact from'./pages/Contact'; 
import Product from'./pages/Product'; 
import Home from './pages/Home';
// import Heroslider from './Components/Hero-slider/Heroslider';
import './App.css';
import About from './Components/About';
// import Price from './Components/Price';



const App=()=> {


  return (
    
    <>
   
    <div className="container1">
      
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Product" element={<Product />} />
       <Route path="/About" element={<About />} />
       <Route path="/Contact" element={<Contact />} />
       <Route path="/Menu" element={<Menu />} />
       {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
 
    {/* <div className='container7'> */}
   
            {/* <Navbar/> */}
            {/* <div className='header1'> */}
            {/* <Header/> */}
            {/* </div> */}
        {/* <Header/> */}
        
        
          {/* <Menu/> */}
          {/* <Price/> */}
          {/* <About/> */}
          {/* <Footer/> */}
        
   
  
      {/* <Header/> */}
     {/* <Home/>
      // <About/>
      <menu/>
  <Products/> */}
  </div>
</>


        
      
    
    
 
  );
}

export default App;
