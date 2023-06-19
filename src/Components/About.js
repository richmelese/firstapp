
import React from "react";
import Navbar from "../Components/Navbar";
import { FaFacebook,FaTelegram,FaTwitter,FaInstagram } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navmenu from"../pages/Navmenu";
import {Footer} from "../Components/Footer";
import "../stayle/About.css";

const About = () => {
  return (
   <div>
    <Navmenu/>
<div>

    <div className="grid_about">
      <div className="container-header">
            <h3>About Us</h3>
            <p>WELCOME TO DOVE BURGER AND CAFFE</p>
            <p>
            These restaurants offer a wide variety of delicious burgers and pizzas that are sure to satisfy any craving. 
            From classic cheeseburgers to gourmet pizzas with unique toppings, there is something for everyone at these establishments.
            One of the great things about burger and pizza restaurants is that they often have a casual and relaxed atmosphere.
            This makes them perfect for a quick lunch or dinner with friends or family. Many of these restaurants also offer takeout and delivery options,
            making it easy to enjoy their tasty food from the comfort of your own home.
          
            </p>
            </div>
      
            <div className="about__image">
            <img src={require("../image/burger1.png")} alt="pizza" />
            </div>
          
        </div>
      </div>

    <>
   <Footer/>
    </>
     </div> 
    
  
  );
};

export default About;