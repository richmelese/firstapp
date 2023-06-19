// import React from "react";
// import Navbar from "./Navbar";
// const Header=()=>{
//     return(
//         <div id="main">
//         <div className="header-heading">
//             <Navbar/>
//             <h3>Its a great time for a good teast of Burger</h3>
//             <h1><span>Burger</span>for<br>a week</br></h1>
//         </div>
//         </div>
//     );

// } 

import React from "react";


const Header = () => {
  return (
   
       <div className="banner">
    
       <div className="banner__content">
         <div className="container">
           <div className="banner__text">
             <h1>DOVE Burger</h1>
             <h3>Burger and pizza</h3>
             <p>Welcom to Our Home
              People Choose Us For Our Delicious Burger Well Cooked Pizza and Our
               Drinks Which you can smell from far away 
          
             </p>
             <div className="banner__btn">
               <a href="/About" className=" btn-smart">
                 Read more
               </a>
               
             </div>
           </div>
         </div>
       </div>
     </div>
 
  );
};

export default Header;
