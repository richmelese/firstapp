import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { FaFacebook,FaTelegram,FaTwitter,FaInstagram } from 'react-icons/fa';
// import slider from './slider';
// import FooterLink from'./FooterStyles';
import {Footer} from "../Components/Footer";
import Carousel from 'react-bootstrap/Carousel';
import Navmenu from "./Navmenu";
import Header from"../Components/Header";
import "../stayle/prices.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
    return (
      <div>
       <Navmenu></Navmenu>
        <div> 
          <Header/>
       {/* <div className="containerH">
       <div className="banner">
    
       <div className="banner__content">
         <div className="container">
           <div className="banner__text">
             <h3>Burger and pizza</h3>
             <h1>DOVE Burger</h1>
             <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
               minus ut mollitia error molestiae quia.
             </p>

             <div className="banner__btn">
               <a href="" className="btn btn-smart">
                 DEVLERY NOW
                
               </a>
              
             </div>
           </div>
         </div>
       </div>
     </div>
</div> */}
     {/* //////////slider code ////////////////////////////// */}
     <div className='bg-dark'>
     <Carousel>
      <Carousel.Item>
     
        <img
          className="d-block w-50 p-3 "
          src={require("../image/burger1.png")}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className=" slider1 text-white fs-1">WELCOME TO DOVE BURGER AND CAFE</h3>
          <p className='text-white'>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
   
   
      <Carousel.Item>
        <img
          className="d-block w-50 p-3"
          src={require("../image/pizza4.png")}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='text-white'>We Are Excited To
Serve You
Come And Test Our Burger and Pizza</h3>
          <p className='text-success'></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 p-3"
          src={require("../image/club.png")}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='text-white'>We Are Excited To
Serve You
Come And Test Our Club Sandwich</h3>
          <p className='text-success'></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 p-3"
          src={require("../image/normal.png")}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-color text-white'>COME AND ENJOY OUR DISHES</h3>
          <p className='text-success'>
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
 


    {/* /////////////////////////////////////////////////////////////// */}
    <div className="prices mt-0 me-0 ms-0 mb-0 ">
    <div className="wel"><h1 className=''> Popular foods</h1>
    {/* PEOPLE CHOOSE US FOR OUR DELICIOUS BURGER,WELL COOKED PIZZA AND OUR DRINKS WHICH YOU CAN SMELL FROM FAR AWAY */}
                <h2 className='text-warning'><span></span></h2></div>
      <div className="container">
        <div className="row ">
          <div className="col-4 ">
            <div className="price">
                
              <div className="price__img">
              <img src={require("../image/burger1.png")} alt="pizza" width="200" heigt="200"/>
              </div>
              <h1 className="price__heading">Burgers</h1>
              <p className="price__text">
             
              </p>
              <p className="price_rs"></p>
              
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
              <img src={require("../image/cheese.png")} alt="pizza" width="200" heigt="200"/>
              </div>
              <h1 className="price__heading">Cheese Burgers</h1>
              <p className="price__text">
               
              </p>
              <p className="price_rs"></p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
              <img src={require("../image/club.png")} alt="pizza" width="200" heigt="200"/>
              </div>
              <h1 className="price__heading">Club Sandwich</h1>
              <p className="price__text">
               {/* rr */}
              </p>
              <p className="price_rs"></p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
              <img src={require("../image/pizza3.png")} alt="pizza" width="200" heigt="200"/>
              </div>
              <h1 className="price__heading">Pizza Margeritta</h1>
              <p className="price__text">
                {/* rr */}
              </p>
              <p className="price_rs"></p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
              <img src={require("../image/ml.png")} alt="pizza" width="200" heigt="200"/>
              </div>
              <h1 className="price__heading">Smoothi and Milkshake</h1>
              <p className="price__text">
             {/* rr */}
              </p>
              <p className="price_rs"></p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={require("../image/pizza4.png")} alt="pizza" width="200" heigt="200"/>
              </div>
              <h1 className="price__heading"> Checken Pizza </h1>
              <p className="price__text">
               {/* rr */}
              </p>
              
              <p className="price_rs"></p>
              </div>
              </div>
              <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={require("../image/pizza1.png")} alt="pizza" width="200" heigt="200"/>
              </div>
              <h1 className="price__heading">Dove special</h1>
              <p className="price__text">
              {/* rr */}
              </p>
              <p className="price_rs"></p>
              </div>
              </div>
              <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={require("../image/clu.jpg")} alt="pizza" width="200" heigt="200"/>
              </div>
              <h1 className="price__heading">Dove Special Club</h1>
              <p className="price__text">
              {/* rr */}
              </p>
              <p className="price_rs"></p>
            </div>
          </div>
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={require("../image/chps.jpg")} alt="pizza" width="200" heigt="200"/>
              </div>
              <h1 className="price__heading">Cheps</h1>
              <p className="price__text">
              {/* rr */}
              </p>
              <p className="price_rs"></p>
              
            </div>
          </div>
        </div>
       </div>
     </div>
     <>
    {/* <section className='footer'>
        <div className="social">
          <div className='inline-flex'>
          <a href='https://www.google.com/maps/place/Hilina+Building+%7C+Goro+%7C+%E1%88%95%E1%88%8A%E1%8A%93+%E1%88%95%E1%8A%95%E1%8D%83+%7C+%E1%8C%8E%E1%88%AE/@8.9908578,38.826787,17z/data=!3m1!4b1!4m6!3m5!1s0x164b9b70b33589fb:0x9f83ad0a7b7dbbe6!8m2!3d8.9908578!4d38.8293673!16s%2Fg%2F11hz9b6n7v'> <img src={require("../image/l.png")}></img></a>
    <a href='mailto:richmelese21@gamil.com'> <img src={require("../image/s.png")}></img></a>
      <a href='http://facebook.com'><img src={require("../image/cd.png")}></img></a>
      <img src={require("../image/i.png")}></img>
  
     </div>
          
        </div>
        <div className='link'>
            
            <ul class="">
            <li> <a href='/Home'><button type="button" class="btn btn-outline-secondary">Home</button></a></li>
           <li><a href='/About'><button type="button" class="btn btn-outline-secondary">About</button></a></li> 
           <li><a href='/menu'><button type="button" class="btn btn-outline-secondary">Menu</button></a></li>
           <li><a href='/Contact'><button type="button" class="btn btn-outline-secondary">Contact</button></a></li> 
           <li><a href='Product'><button type="button" class="btn btn-outline-secondary">Product</button></a></li>  
            </ul>
            
        </div>
        <div className='creadit'>
        <span><h6 class='text-center '>© 2023 Made by Rahel Melese</h6></span>
        </div>


    </section> */}
    <Footer/>
    </>
       
       </div>
       </div>
      
     
    );
   };
   
   export default Home;