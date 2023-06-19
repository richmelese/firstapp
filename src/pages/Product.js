
import Navbar from "../Components/Navbar";
 import 'bootstrap/dist/css/bootstrap.min.css';
 import { FaFacebook,FaTelegram,FaTwitter,FaInstagram,  } from 'react-icons/fa';
 import 'bootstrap-icons/font/bootstrap-icons.css';
 import Carousel from 'react-bootstrap/Carousel';
 import Navmenu from '../pages/Navmenu';
 import Footer from "../Components/Footer";

 const Product = () => {
  return (
    <div>
     <Navmenu/>
      <div>
      
        <div className='bg-warning'>
     <Carousel>
      <Carousel.Item>
     
        <img
          className="d-block w-80 p-3 "
          src={require("../image/slider1.png")}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="text-success">CHICKENES</h3>
          <p className='text-success'>

          </p>
        </Carousel.Caption>
      </Carousel.Item>
   
      <Carousel.Item>
        <img
          className="d-block w-80 p-3"
          src={require("../image/slider2.png")}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='text-success'>SALADS</h3>
          <p className='text-success'></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-80 p-3"
          src={require("../image/slider03.png")}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-color '>BURGERS</h3>
          <p className='text-success'>
           
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-80 p-3 "
          src={require("../image/yy.jpg")}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-color '>Milk Shakes and Smoothie</h3>
          <p className='text-success'>
           
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 p-3"
          src={require("../image/burger1.png")}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-color '></h3>
          <p className='text-success'>
          
          </p>
        </Carousel.Caption>
      </Carousel.Item>
   

        
    
      
      
      <Carousel.Item>
        <img
          className="d-block w-80 p-3"
          src={require("../image/coffe2.png")}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-color '>Third slide label</h3>
          <p className='text-success'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-80 p-3"
          src={require("../image/pizza4.png")}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-color '>Third slide label</h3>
          <p className='text-success'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-80 p-3"
          src={require("../image/clu.jpg")}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-color '>CLUB SANDWICHES</h3>
          <p className='text-success'>
          
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <>
    <section className='footer'>
        <div className=" d-inline-flex"> 
         <div>
         {/* <i class="">  <a href="#" ><FaLocation className='icon twitter'/></a></i> */}
         <a href='https://www.google.com/maps/place/Hilina+Building+%7C+Goro+%7C+%E1%88%95%E1%88%8A%E1%8A%93+%E1%88%95%E1%8A%95%E1%8D%83+%7C+%E1%8C%8E%E1%88%AE/@8.9908578,38.826787,17z/data=!3m1!4b1!4m6!3m5!1s0x164b9b70b33589fb:0x9f83ad0a7b7dbbe6!8m2!3d8.9908578!4d38.8293673!16s%2Fg%2F11hz9b6n7v'> <img src={require("../image/l.png")}></img></a>
    <a href='mailto:richmelese21@gamil.com'> <img src={require("../image/s.png")}></img></a>
      <a href='http://facebook.com'><img src={require("../image/cd.png")}></img></a>
      <img src={require("../image/i.png")}></img>
   
     </div>
            {/* <a href='#'> < i class="fa f-facebook-f"></i></a>
           <i> <a href='#' className=' fa fa-instagram'></a></i>
           <i> <a href='#' className=' fa fa-twitter'></a></i>
            <a href='#' className='fa fa-telegram'></a> */}
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


    </section>
    </>
    </div>
 
</div>
</div>
);
}
 export default Product;
////////////////////////////////////
//////////new owl cauousel code slider//////////////

// import jquery from 'jquery'
// import React,{pages} from 'react';  

// import OwlCarousel from 'react-owl-carousel';  
// import 'owl.carousel/dist/assets/owl.carousel.css';  
// import 'owl.carousel/dist/assets/owl.theme.default.css';  
// // import Product from './pages/product'; 
// // import './owl.css';  
// // import '../stayle/main.css';
// // export class Product extends pages
// export class Product extends pages{  
//         render()  
//         {  
//           return (  
//             <div>  
//           <div class='container-fluid' >      
//            <div className="row title" style={{marginBottom: "20px"}} >      
//            <div class="col-sm-12 btn btn-info">      
//            Owl Carousel In React Application   
//            </div>      
//            </div>  
//        </div>  
//        <div class='container-fluid' >            
//         <OwlCarousel items={3}  
//           className="owl-theme"  
//           loop  
//           nav  
//           margin={8} >  
//            <div ><img  className="img" src= {'../image/burgerr.jpg'alt='one'}/></div>  
//            <div><img  className="img" src= {'../image/cake.jpg'alt='tow'} /></div>  
//            <div><img  className="img" src= {'../image/cc.jpg'alt='three'}/></div>  
//            <div><img  className="img" src= {'../image/s1.jpg'alt='four'/></div>  
//            <div><img className="img" src= '../image/s2.jpg'alt='yyy'/></div>  
//            <div><img className="img" src= '../img/cheese.jpg'alt='rrr'/></div>  
//            <div><img className="img" src= '../image/coffe.jpg'alt='uu'/></div>  
//       </OwlCarousel>  
//       </div>  
  
//       </div>  
//           ) 
//         }  
//       }  
        
  
// export default Product

////////////////////////////////////////////////////////