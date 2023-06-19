
// import Navbar from "../Components/Navbar";
//  import 'bootstrap/dist/css/bootstrap.min.css';
//  import Table from 'react-bootstrap/Table';
//  import { FaFacebook,FaTelegram,FaTwitter,FaInstagram } from 'react-icons/fa';




//  const Menu = () => {
//   return (
//     <div>
//       <Navbar></Navbar>
//       <div>
//         <div className="head">
//     <h1 className="text-center text-warning my-5">Pizza MenuList</h1>
//     </div>
//       <div className="containerM">
//         <div className="row">
//        <div className="col-md-2">
//        <div class="card mb-5" >
//   <img src={require("../public/image/pizza1.png")} class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Margarita pizza</h5>
//     {/* <p class="card-text">Large:250birr</p>
//     <p class="card-text">medium:250birr</p> */}
//     {/* <a href="#" class="btn btn-primary"></a> */}
//   </div>
// </div>
//         </div>
//         <div className="col-md-2">
//        <div class="card" >
//   <img src={require("../public/image/pizza3.png")} class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Biff Pizza</h5>
//     {/* <p class="card-text">Large:270birr</p>
//     <p class="card-text">medium:230birr</p> */}
//     {/* <a href="#" class="btn btn-primary">Large 270birr</a> */}
//   </div>
// </div>
//         </div>
//         <div className="col-md-2">
//        <div class="card" >
//   <img src={require("../public/image/pizza4.png")} class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Chicken Pizza</h5>
//     {/* <p class="card-text">Large:280birr</p>
//     <p class="card-text">medium:215birr</p> */}
//     {/* <a href="#" class="btn btn-primary">Large 280birr</a> */}
//   </div>
// </div>
//         </div>
//         <div className="col-md-2">
//        <div class="card" >
//   <img src={require("../public/image/tuna.jpg")} class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Tuna Pizza</h5>
//     {/* <p class="card-text">Large:285birr</p>
//     <p class="card-text">medium:250birr</p> */}
//     {/* <a href="#" class="btn btn-primary">Large 285birr</a> */}
//   </div>
// </div>
//         </div>
//         {/* <div className="col-md-2">
//        <div class="card" >
//   <img src={require("../image/slider1.png")} class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Tuna Pizza with cheese</h5> */}
//     {/* <p class="card-text">Large:300birr</p>
//     <p class="card-text">medium:280birr</p> */}
// {/* 
//     <a href="#" class="btn btn-primary">Large 300birr</a> */}
//   {/* </div>
// </div>
//         </div> */}
//         <div className="col-md-2">
//        <div class="card" >
//   <img src={require("../public/image/slider1.png")} class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Special Pizza</h5>
//     {/* <p class="card-text">Large:350birr</p>
//     <p class="card-text">medium:300birr</p> */}

//     {/* <a href="#" class="btn btn-primary">Large 350birr</a> */}
//   </div>
// </div>
//         </div>
//         <div className="col-md-2">
//        <div class="card" >
//   <img src={require("../public/image/slider1.png")} class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Mushroom Pizza</h5>
//     {/* <p class="card-text">Large:290birr</p>
//     <p class="card-text">medium:250birr</p> */}
//     {/* <a href="#" class="btn btn-primary">Large 290birr</a> */}
//   </div>
// </div>
//         </div>
//         {/* <div className="col-md-2">
//        <div class="card" >
//   <img src={require("../image/slider1.png")} class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Vegetable Pizza</h5> */}
//     {/* <p class="card-text">Large:290birr</p>
//     <p class="card-text">medium:250birr</p> */}
//     {/* <a href="#" class="btn btn-primary">Large 290birr</a> */}
//   {/* </div>
// </div>
//         </div> */}
//         {/* <div className="col-md-2">
//        <div class="card" >
//   <img src={require("../image/slider1.png")} class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Tuna with Vegetable Pizza</h5> */}
//     {/* <p class="card-text">Large:290birr</p>
//     <p class="card-text">medium:250birr</p> */}
//     {/* <a href="#" class="btn btn-primary">Large 290birr</a> */}
//   {/* </div>
// </div>
//         </div> */}
//         <div className="col-md-2">
//        <div class="card" >
//   <img src={require("../public/image//slider1.png")} class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Egg Pizza</h5>
//     {/* <p class="card-text">Large:250birr </p>
//     <p class="card-text">medium:200birr</p> */}
//     {/* <a href="#" class="btn btn-primary">Large 250birr medium 200birr</a> */}
//   </div>
// </div>
//         </div>
//         </div>
//         </div>
//         <div>
//           <div className="head">
//         <h1 className="text-center text-warning my-5">Burger MenuList</h1>
//         </div>
//       <div className="containerM">
//         <div className="row">
//        <div className="col-md-2">
//        <div class="card mb-5" >
//   <img src={require("../public/image/slider1.png")} class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Normal Burger</h5>
//     {/* <p class="card-text">180birr</p> */}
//     {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
//   </div>
// </div>
//         </div>
//         <div className="col-md-2">
//        <div class="card" >
//   <img src={require("../public/image/slider1.png")} class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Cheese Burger</h5>
//     {/* <p class="card-text">200birr</p> */}
//     {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
//   </div>
// </div>
//         </div>
//         <div className="col-md-2">
//        <div class="card" >
//   <img src={require("../public/image/slider1.png")} class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Double Burger</h5>
//     {/* <p class="card-text">230birr</p> */}
//     {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
//   </div>
// </div>
//         </div>
//         <div className="col-md-2">
//        <div class="card" >
//   <img src={require("../public/image/slider1.png")} class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Chicken Burger</h5>
//     {/* <p class="card-text">220birr</p> */}
//     {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
//   </div>
// </div>
//         </div>
//         <div className="col-md-2">
//        <div class="card" >
//   <img src={require("../public/image/slider1.png")} class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Special chicken Burger</h5>
//     {/* <p class="card-text">270birr</p> */}
//     {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
//   </div>
// </div>
//         </div>
//         <div className="col-md-2">
//        <div class="card" >
//   <img src={require("../public/image/slider1.png")} class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Special Burger</h5>
//     {/* <p class="card-text">250birr</p> */}
//     {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
//   </div>
// </div>

//         </div>
//         <div className="col-md-2">
//        <div class="card" >
//   <img src={require("../public/image/slider1.png")} class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Egg Burger</h5>
//     {/* <p class="card-text">200birr</p> */}
//     {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
//   </div>
// </div>
//         </div>
//         <div className="col-md-2">
//        <div class="card" >
//   <img src={require("../public/image/s1.png")} class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Club Sandwich with meet</h5>
//     {/* <p class="card-text">180birr</p> */}
//     {/* <a href="#" class="btn btn-primary"></a> */}
//   </div>
// </div>
//         </div>
//         <div className="col-md-2">
//        <div class="card" >
//   <img src={require("../public/image/cheese.jpg")} class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Club Sandwich with Doro</h5>
//     {/* <p class="card-text">200birr</p> */}
//     {/* <a href="#" class="btn btn-primary">250birr</a> */}
//   </div>
// </div>
//         </div>
//         {/* <div className="col-md-2">
//        <div class="card" >
//   <img src={require("../image/chicken.jpg")} class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Club Sandwich Tuna</h5> */}
//     {/* <p class="card-text">200birr</p> */}
//     {/* <a href="#" class="btn btn-primary">250birr</a> */}
//   {/* </div>
// </div>
//         </div> */}
//         <div className="head">
//     <h1 className="text-center text-warning my-5">Hot Drinks</h1>
//     </div>
//         <div class="row">
//   <div class="col-md-6">
//     <div>
//       <img alt="Web Studio" class="img-fluid" src={require("../public/image/coffe2.png")} />
//     </div>
//   </div>
//   <div class="col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0">
//     <div>
//       <p className="hot">Align image and text in same line in bootstrap</p>
//     </div>
//   </div>
// </div>
// <div className="head">
//     <h1 className="text-center text-warning my-5">Fish</h1>
//     </div>
//         <div class="row">
//   <div class="col-md-6">
//     <div>
//       <img alt="Web Studio" class="img-fluid rounded mx-auto d-block" src={require("../public/image/fish.jpg")} />
      
//     </div>
//   </div>
//   <div class="col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0">
//     <div>
//       <p className="hot">Align image and text in same line in bootstrap</p>
//     </div>
//   </div>
// </div>
// <div className="head">
//     <h1 className="text-center text-warning my-5">Smoothie</h1>
//     </div>
//         <div class="row">
//   <div class="col-md-6 ms-2">
//     <div>
//       <img alt="Web Studio" class="img-fluid rounded mx-auto d-block" src={require("../public/image/sm.jpg")} />
//     </div>
//   </div>
//   <div class="col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0">
//     <div>
//       <p className="hot">Align image and text in same line in bootstrap</p>
//     </div>
//   </div>
// </div>
// <div className="head">
//     <h1 className="text-center text-warning my-5">juce</h1>
//     </div>
//         <div class="row">
//   <div class="col-md-6">
//     <div>
//       <img alt="Web Studio" class="img-fluid rounded mx-auto d-block" src={require("../public/image/o.jpg")} />
      
//     </div>
//   </div>
//   <div class="col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0">
//     <div>
//       <p className="hot">Align image and text in same line in bootstrap</p>
//     </div>
//   </div>
// </div>
// <div className="head">
//     <h1 className="text-center text-warning my-5">Club Sandwich</h1>
//     </div>
//         <div class="row">
//   <div class="col-md-6 ms-2">
//     <div>
//       <img alt="Web Studio" class="img-fluid rounded mx-auto d-block" src={require("../public/image/c.jpg")} />
//     </div>
//   </div>
//   <div class="col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0">
//     <div>
//       <p className="hot">Align image and text in same line in bootstrap</p>
//     </div>
//   </div>
// </div>



//         <>
//     <section className='footer'>
//         <div className="social">
//           <div>
//           <i class="">  <a href="http://facebook.com"><FaFacebook className='icon facebook'/></a></i>
//      <i class="">  <a href="#"><FaTelegram className='icon telegram'/></a></i>
//      <i class="">  <a href="#"><FaInstagram className='icon instagram'/></a></i>
//      <i class="">  <a href="#" ><FaTwitter className='icon twitter'/></a></i>
//             </div>
//             {/* <a href='#'> < i class="fa f-facebook-f"></i></a>
//            <i> <a href='#' className=' fa fa-instagram'></a></i>
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
//         </div>
//         </div>
//         </div>
 
// </div>
// </div>
// );
// }
//  export default Menu;
// //     <div>
// //     <Navbar></Navbar>
// //     <div>
// //       <div className="features-boxed">
// //         <div className="menu1">
// //           <div className="intro">
// //             <h2 className="text-center">pizzas menu</h2>
// //             <div className="row justfy-content-center features">
              
// //               <Item/>
              
              
              
// //               </div>
// //             </div>
// //           </div>
// //           {/* <div className="features-boxed">
// //         <div className="menu1">
// //           <div className="intro">
// //             <h2 className="text-center">pizzas menu</h2>
// //             <div className="row justfy-content-center features">
              
// //               <Item/>
              
              
              
// //               </div>
// //             </div>
// //           </div> */}
// //         </div>
// //       </div>
   
// //     </div>
// //     // ----- the above code is item code---
// //     // </div>
// //     // export const popularMenuFood = [
// // //   {
// // //     id: "01",
// // //     title: "Vegetable Salad",
// // //     price: 25,
// // //     imgUrl: fastFood03,
// // //   },
// // //   {
// // //     id: "02",
// // //     title: "Chicken",
// // //     price: 250,
// // //     imgUrl: fastFood04,
// // //   },

// // //   {
// // //     id: "03",
// // //     title: "Whipped Cream",
// // //     price: 45,
// // //     imgUrl: dessert02,
// // //   },

// // //   {
// // //     id: "04",
// // //     title: "Pizza",
// // //     price: 75,
// // //     imgUrl: pizzaImg01,
// // //   },
// // // ];

// // // export const fastFoodProducts = [
// // //   {
// // //     id: "05",
// // //     title: "Burger",
// // //     price: 95,
// // //     imgUrl: fastFood04,
// // //   },
// // //   {
// // //     id: "06",
// // //     title: "Chicken",
// // //     price: 250,
// // //     imgUrl: fastFood04,
// // //   },
// // //   {
// // //     id: "07",
// // //     title: "Grill Chicken",
// // //     price: 195,
// // //     imgUrl: fastFood04,
// // //   },
// // //   {
// // //     id: "08",
// // //     title: "Barbeque",
// // //     price: 275,
// // //     imgUrl: fastFood04,
// // //   },
// // //   {
// // //     id: "09",
// // //     title: "Pizza",
// // //     price: 275,
// // //     imgUrl: fastFood04,
// // //   },
// // //   {
// // //     id: "10",
// // //     title: "Burger",
// // //     price: 95,
// // //     imgUrl: fastFood04,
// // //   },
// // //   {
// // //     id: "11",
// // //     title: "Chicken",
// // //     price: 250,
// // //     imgUrl: fastFood04,
// // //   },
// // //   {
// // //     id: "12",
// // //     title: "Grill Chicken",
// // //     price: 195,
// // //     imgUrl: fastFood04,
// // //   },
// // // ];

// // // export const riceMenuProducts = [
// // //   {
// // //     id: "12",
// // //     title: "Fried Rice",
// // //     price: 95,
// // //     imgUrl: salad,
// // //   },
// // //   {
// // //     id: "14",
// // //     title: "Vegetable",
// // //     price: 250,
// // //     imgUrl: salad,
// // //   },
// // //   {
// // //     id: "15",
// // //     title: "Vegetable Salad",
// // //     price: 195,
// // //     imgUrl: salad,
// // //   },
// // //   {
// // //     id: "16",
// // //     title: "Meal",
// // //     price: 275,
// // //     imgUrl: salad,
// // //   },
// // //   {
// // //     id: "17",
// // //     title: "Fried Rice",
// // //     price: 95,
// // //     imgUrl: salad,
// // //   },
// // //   {
// // //     id: "18",
// // //     title: "Vegetable",
// // //     price: 250,
// // //     imgUrl: salad,
// // //   },
// // //   {
// // //     id: "19",
// // //     title: "Vegetable Salad",
// // //     price: 195,
// // //     imgUrl: salad,
// // //   },
// // //   {
// // //     id: "20",
// // //     title: "Meal",
// // //     price: 275,
// // //     imgUrl: salad,
// // //   },
// // // ];

// // // export const dessertProducts = [
// // //   {
// // //     id: "21",
// // //     title: "Whipped Cream",
// // //     price: 50,
// // //     imgUrl: dessert03,
// // //   },
// // //   {
// // //     id: "22",
// // //     title: "Cake Cream",
// // //     price: 50,
// // //     imgUrl: dessert02,
// // //   },
// // //   {
// // //     id: "23",
// // //     title: "Cake",
// // //     price: 50,
// // //     imgUrl: dessert03,
// // //   },
// // //   {
// // //     id: "24",
// // //     title: "Cup Cake",
// // //     price: 275,
// // //     imgUrl: dessert04,
// // //   },
// // //   {
// // //     id: "25",
// // //     title: "Whipped Cream",
// // //     price: 50,
// // //     imgUrl: dessert03,
// // //   },
// // //   {
// // //     id: "26",
// // //     title: "Cake Cream",
// // //     price: 50,
// // //     imgUrl: dessert02,
// // //   },
// // //   {
// // //     id: "27",
// // //     title: "Cake",
// // //     price: 50,
// // //     imgUrl: dessert03,
// // //   },
// // //   {
// // //     id: "28",
// // //     title: "Cup Cake",
// // //     price: 275,
// // //     imgUrl: dessert04,
// // //   },
// // // ];

// // // export const pizzaProducts = [
// // //   {
// // //     id: "29",
// // //     title: "Pizza",
// // //     price: 95,
// // //     imgUrl: pizzaImg01,
// // //   },
// // //   {
// // //     id: "30",
// // //     title: "Pizza",
// // //     price: 95,
// // //     imgUrl: pizzaImg01,
// // //   },
// // //   {
// // //     id: "31",
// // //     title: "Pizza",
// // //     price: 95,
// // //     imgUrl: pizzaImg01,
// // //   },
// // //   {
// // //     id: "32",
// // //     title: "Pizza",
// // //     price: 95,
// // //     imgUrl: pizzaImg01,
// // //   },
// // //   {
// // //     id: "33",
// // //     title: "Pizza",
// // //     price: 95,
// // //     imgUrl: pizzaImg01,
// // //   },
// // //   {
// // //     id: "34",
// // //     title: "Pizza",
// // //     price: 95,
// // //     imgUrl: pizzaImg01,
// // //   },

// // //   {
// // //     id: "35",
// // //     title: "Pizza",
// // //     price: 95,
// // //     imgUrl: pizzaImg01,
// // //   },
// // //   {
// // //     id: "36",
// // //     title: "Pizza",
// // //     price: 95,
// // //     imgUrl: pizzaImg01,
// // //   },
// // // ];

// // // export const coffeeProducts = [
// // //   {
// // //     id: "37",
// // //     title: "Hot Coffee",
// // //     price: 20,
// // //     imgUrl: coffeeImg02,
// // //   },
// // //   {
// // //     id: "38",
// // //     title: "Cold Coffee",
// // //     price: 20,
// // //     imgUrl: coffeeImg02,
// // //   },
// // //   {
// // //     id: "39",
// // //     title: "Black Coffee",
// // //     price: 20,
// // //     imgUrl: coffeeImg02,
// // //   },
// // //   {
// // //     id: "40",
// // //     title: "White Coffee",
// // //     price: 95,
// // //     imgUrl: coffeeImg02,
// // //   },
// // //   {
// // //     id: "41",
// // //     title: "Hot Coffee",
// // //     price: 20,
// // //     imgUrl: coffeeImg02,
// // //   },
// // //   {
// // //     id: "42",
// // //     title: "Cold Coffee",
// // //     price: 20,
// // //     imgUrl: coffeeImg02,
// // //   },

// // //   {
// // //     id: "43",
// // //     title: "Black Coffee",
// // //     price: 20,
// // //     imgUrl: coffeeImg02,
// // //   },
// // //   {
// // //     id: "44",
// // //     title: "White Coffee",
// // //     price: 95,
// // //     imgUrl: coffeeImg02,
// // //   },
// // // ];
   

// //   );
// // };
