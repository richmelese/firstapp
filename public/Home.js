// import { useNavigate } from 'react-router-dom';
// import Navbar from '../Components/Navbar';
// import { FaFacebook,FaTelegram,FaTwitter,FaInstagram } from 'react-icons/fa';
// import slider from './slider';
// // import FooterLink from'./FooterStyles';
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const Home = () => {
//     return (
//       <div>
//          <Navbar></Navbar>
//         <div> 
//        <div className="containerH">
//        {/* <div className="banner">
    
//        <div className="banner__content">
//          <div className="container">
//            <div className="banner__text">
//              <h3>Burger and pizza</h3>
//              <h1>DOVE Burger</h1>
//              <p>
//                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
//                minus ut mollitia error molestiae quia.
//              </p>

//              <div className="banner__btn">
//                <a href="" className="btn btn-smart">
//                  DEVLERY NOW
                
//                </a>
              
//              </div>
//            </div>
//          </div>
//        </div>
//      </div> */}

//      {/* //////////slider code ////////////////////////////// */}
//      <div className='bg-dark'>
//      <Carousel>
//       <Carousel.Item>
     
//         <img
//           className="d-block w-50 p-3 "
//           src={require("../public/image/slider1.png")}
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3 className="text-success">WELCOM TO OUR HOME</h3>
//           <p className='text-success'>Dove Burger and Caffe 

//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
   
//       <Carousel.Item>
//         <img
//           className="d-block w-50 p-3"
//           src={require("../public/image/slider2.png")}
//           alt="Second slide"
//         />

//         <Carousel.Caption>
//           <h3 className='text-success'>Enjoy our Dishes</h3>
//           <p className='text-success'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-50 p-3"
//           src={require("../public/image/slider03.png")}
//           alt="Third slide"
//         />

//         <Carousel.Caption>
//           <h3 className='text-color '>Third slide label</h3>
//           <p className='text-success'>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//     </div>
 


//     {/* /////////////////////////////////////////////////////////////// */}
//     <div className="prices mt-0 me-0 ms-0 mb-0 ">
//     <div className="wel"><h1 className='text-warning'>WELCOME to DOVE Burger and Cafe </h1>
//                 <h2 className='text-warning'><span>We Are Excited To
// Make For You,
// Come And Test Our Foods</span></h2></div>
//       <div className="container">
//         <div className="row ">
//           <div className="col-4 ">
//             <div className="price">
                
//               <div className="price__img">
//               <img src={require("../public/image/burger.png")} alt="pizza" width="200" heigt="200"/>
//               </div>
//               <h1 className="price__heading">pepperoni</h1>
//               <p className="price__text">
             
//               </p>
//               <p className="price_rs"></p>
              
//             </div>
//           </div>

//           <div className="col-4">
//             <div className="price">
//               <div className="price__img">
//               <img src={require("../public/image/image.jpg")} alt="pizza" width="200" heigt="200"/>
//               </div>
//               <h1 className="price__heading">Chicken Pizza</h1>
//               <p className="price__text">
               
//               </p>
//               <p className="price_rs"></p>
//             </div>
//           </div>

//           <div className="col-4">
//             <div className="price">
//               <div className="price__img">
//               <img src={require("../public/image/c.jpg")} alt="pizza" width="200" heigt="200"/>
//               </div>
//               <h1 className="price__heading">Club Sandwich</h1>
//               <p className="price__text">
//                {/* rr */}
//               </p>
//               <p className="price_rs"></p>
//             </div>
//           </div>

//           <div className="col-4">
//             <div className="price">
//               <div className="price__img">
//               <img src={require("../public/image/pizza3.png")} alt="pizza" width="200" heigt="200"/>
//               </div>
//               <h1 className="price__heading">Pizza Margeritta</h1>
//               <p className="price__text">
//                 {/* rr */}
//               </p>
//               <p className="price_rs"></p>
//             </div>
//           </div>

//           <div className="col-4">
//             <div className="price">
//               <div className="price__img">
//               <img src={require("../public/image/pizza1.png")} alt="pizza" width="200" heigt="200"/>
//               </div>
//               <h1 className="price__heading">Pizza Margeritta</h1>
//               <p className="price__text">
//              {/* rr */}
//               </p>
//               <p className="price_rs"></p>
//             </div>
//           </div>

//           <div className="col-4">
//             <div className="price">
//               <div className="price__img">
//                 <img src={require("../public/image/pizza4.png")} alt="pizza" width="200" heigt="200"/>
//               </div>
//               <h1 className="price__heading">Pizza Margeritta</h1>
//               <p className="price__text">
//                {/* rr */}
//               </p>
              
//               <p className="price_rs"></p>
//               </div>
//               </div>
//               <div className="col-4">
//             <div className="price">
//               <div className="price__img">
//                 <img src={require("../public/image/pizza3.png")} alt="pizza" width="200" heigt="200"/>
//               </div>
//               <h1 className="price__heading">Dove special</h1>
//               <p className="price__text">
//               {/* rr */}
//               </p>
//               <p className="price_rs"></p>
//               </div>
//               </div>
//               <div className="col-4">
//             <div className="price">
//               <div className="price__img">
//                 <img src={require("../public/image/ww.jpg")} alt="pizza" width="200" heigt="200"/>
//               </div>
//               <h1 className="price__heading">Dove special</h1>
//               <p className="price__text">
//               {/* rr */}
//               </p>
//               <p className="price_rs"></p>
//             </div>
//           </div>
//           <div className="col-4">
//             <div className="price">
//               <div className="price__img">
//                 <img src={require("../public/image/chps.jpg")} alt="pizza" width="200" heigt="200"/>
//               </div>
//               <h1 className="price__heading">Dove special</h1>
//               <p className="price__text">
//               {/* rr */}
//               </p>
//               <p className="price_rs"></p>
              
//             </div>
//           </div>
//         </div>
//        </div>
//      </div>
//      <>
//     <section className='footer'>
//         <div className="social">
//           <div className='inline-flex'>
//      <i class="">  <a href="http://facebook.com"><FaFacebook className='icon facebook'/></a></i>
//      <i class="">  <a href="#"><FaTelegram className='icon telegram'/></a></i>
//      <i class="">  <a href="#"><FaInstagram className='icon instagram'/></a></i>
//      <i class="">  <a href="#" ><FaTwitter className='icon twitter'/></a></i>
//      </div>
//             {/* <FaInstagram className='icon telegram'/>
//             <FaTelegram className='icon instagram'/>
//             <FaTwitter className='icon twitter'/> */}
            
//           {/* <i> <a href="#"></a><FaFacebook className='icon facebook'></a><i/>
//            <i> <a href='#' ><FaFacebook className='icon facebook'></a></i>
//            <i> <a href='#' className=' fa fa-twitter'></a></i>
//             <a href='#' className='fa fa-telegram'></a> */}
//         </div>
//         <div className='link'>
            
//             <ul class="">
//             <li> <a href='/Home'><button type="button" class="btn btn-outline-secondary">Home</button></a></li>
//            <li><a href='/About'><button type="button" class="btn btn-outline-secondary">About</button></a></li> 
//            <li><a href='/menu'><button type="button" class="btn btn-outline-secondary">Menu</button></a></li>
//            <li><a href='/Contact'><button type="button" class="btn btn-outline-secondary">Contact</button></a></li> 
//            <li><a href='Product'><button type="button" class="btn btn-outline-secondary">Product</button></a></li>  
//             </ul>
            
//         </div>
//         <div className='creadit'>
//         <span><h6 class='text-center '>© 2023 Made by Rahel Melese</h6></span>
//         </div>


//     </section>
//     </>
//        </div>
//        </div>
//        </div>
      
     
//     );
//    };
   
//    export default Home;