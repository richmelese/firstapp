import React from "react";
import Navbar from "../Components/Navbar";
import DataTable from "../Components/DataTable";
 import 'bootstrap/dist/css/bootstrap.min.css';
//  import Pagination from 'react-bootstrap/Pagination';
 import Table from 'react-bootstrap/Table';
 import Navmenu from "../pages/Navmenu";
 import {Footer} from "../Components/Footer";
 import Food from "../pages/Food";
 import "../stayle/menu.css";
 import { FaFacebook,FaTelegram,FaTwitter,FaInstagram } from 'react-icons/fa';
 const Menu = () => {
  return (
    <div>
   <Navmenu/>
      <div>
     
        <div className="head">
    <h1 className="text-center ">Pizza MenuList</h1>
    </div>
      <div className="cont">
        <div className="row">
       <div className="col-md-2">
       <div class="card mb-5" >
  <img src={require("../image/pizza1.png")} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Margarita pizza</h5>
    <p class="card-text">Large:250birr</p>
    <p class="card-text">medium:250birr</p>
    {/* <a href="#" class="btn btn-primary"></a> */}
  </div>
</div>
        </div>
        <div className="col-md-2">
       <div class="card" >
  <img src={require("../image/pizza3.png")} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Beff Pizza</h5>
    <p class="card-text">Large:270birr</p>
    <p class="card-text">medium:230birr</p>
    {/* <a href="#" class="btn btn-primary">Large 270birr</a> */}
  </div>
</div>
        </div>
        <div className="col-md-2">
       <div class="card" >
  <img src={require("../image/pizza4.png")} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Chicken Pizza</h5>
    <p class="card-text">Large:280birr</p>
    <p class="card-text">medium:215birr</p>
    {/* <a href="#" class="btn btn-primary">Large 280birr</a> */}
  </div>
</div>
        </div>
        <div className="col-md-2">
       <div class="card" >
  <img src={require("../image/tuna.jpg")} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Tuna Pizza</h5>
    <p class="card-text">Large:285birr</p>
    <p class="card-text">medium:250birr</p>
    
  </div>
</div>
        </div>
     
        <div className="col-md-2">
       <div class="card" >
  <img src={require("../image/special.jpg")} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Special Pizza</h5>
    <p class="card-text">Large:350birr</p>
    <p class="card-text">medium:300birr</p>

    
  </div>
</div>
        </div>
        <div className="col-md-2">
       <div class="card mb-5" >
  <img src={require("../image/musshurom.jpg")} class="card-img-top" alt="..."/> */
  <div class="card-body">
    <h5 class="card-title">Musshurom </h5>
    <p class="card-text">Large:290birr</p>
    <p class="card-text">medium:250birr</p>

  </div>
</div>
        </div>
      
        </div>
        </div>
        {/* <a href="#" id="Burger Menu" className=" btn-smart">
                 Read more
               </a> */}
        <div className="grid__container">
          <div className="grid-Menuheader"><h1 >Burger Menu</h1></div>
          <div className="normal-burger"> <img src={require("../image/normal.png")}/></div>
          <div><h5 className="text">Normal burger--180birr</h5> <hr className="text-white"></hr></div>
          
          <div className="special-burger"> <img src={require("../image/specialmenu.png")}/></div>
          <div><h5 className="text">special burger--250birr</h5> <hr className="text-white"></hr></div>
          <div className="Chees-burger"> <img src={require("../image/cheese.png")}/>
            </div>
            <div><h5 className="text">Cheese burger--200birr</h5> <hr className="text-white"></hr></div>
          <div className="double-burger"> <img src={require("../image/double.png")}/> </div>
          <div><h5 className="text">Double burger--230birr</h5> <hr className="text-white"></hr></div>
          <div className="cheken-burger"> <img src={require("../image/chicken.png")}/> </div>
          <div><h5 className="text">Chicken burger--220birr</h5> <hr className="text-white"></hr></div>
          <div className="egg-burger"> <img src={require("../image/egg.png")}/></div>
          <div><h5 className="text">Egg burger--200birr</h5> <hr className="text-white"></hr></div>
             {/* /////////////////////////////////////////////// */}
          <div className="grid-Menuheader"><h1 >Club Sandwich Menu</h1></div>
          <div className="normal-burger"> <img src={require("../image/club.png")}/></div>
          <div><h5 className="text">Club Sandwich with Chicken--200birr</h5> <hr className="text-white"></hr></div>
          
          <div className="special-burger"> <img src={require("../image/club.png")}/></div>
          <div><h5 className="text">Tuna Sandwich--200birr</h5> <hr className="text-white"></hr></div>
          <div className="Chees-burger"> <img src={require("../image/club.png")}/>
            </div>
            <div><h5 className="text">Club Sandwich with Chicken--200birr</h5> <hr className="text-white"></hr></div>
          <div className="double-burger"> <img src={require("../image/club.png")}/> </div>
          <div><h5 className="text">Club SandwichTuna 200birr</h5> <hr className="text-white"></hr></div>
          <div className="cheken-burger"><img src={require("../image/club.png")}/> </div>
          <div><h5 className="text"> Vegetable Sandwich 100birr</h5> <hr className="text-white"></hr></div>
          <div className="egg-burger"> <img src={require("../image/club.png")}/></div>
          <div><h5 className="text"> chips--95birr</h5> <hr className="text-white"></hr></div>
      {/* /////////////////////////////////////////// */}
      <div className="grid-Menuheader"><h1 >Juice</h1></div>
          <div className="normal-burger"> <img src={require("../image/juice.png")}/></div>
          <div><h5 className="text"> Avocado Juice--70birr</h5> <hr className="text-white"></hr></div>
          
          <div className="special-burger"> <img src={require("../image/juice.png")}/></div>
          <div><h5 className="text"> Mango Juice --70birr</h5> <hr className="text-white"></hr></div>
          <div className="Chees-burger"><img src={require("../image/juice.png")}/>
            </div>
            <div><h5 className="text">Papaya Juice--70birr</h5> <hr className="text-white"></hr></div>
          <div className="double-burger"> <img src={require("../image/juice.png")}/> </div>
          <div><h5 className="text">Espris Juice--70birr</h5> <hr className="text-white"></hr></div>
          <div className="cheken-burger"> <img src={require("../image/juice.png")}/> </div>
          <div><h5 className="text"> Mocha Shek--80birr</h5> <hr className="text-white"></hr></div>
          <div className="egg-burger"> <img src={require("../image/juice.png")}/></div>
          <div><h5 className="text">Mango Shek --80birr</h5> <hr className="text-white"></hr></div>
          <div className="egg-burger"> <img src={require("../image/juice.png")}/></div>
          <div><h5 className="text">Avocado Shek--80birr</h5> <hr className="text-white"></hr></div>
          <div className="egg-burger"> <img src={require("../image/juice.png")}/></div>
          <div><h5 className="text">Special Juice--80birr</h5> <hr className="text-white"></hr></div>
          <div className="egg-burger"> <img src={require("../image/juice.png")}/></div>
          <div><h5 className="text"> Smoothie --80birr</h5> <hr className="text-white"></hr></div>
          <div className="egg-burger"> <img src={require("../image/juice.png")}/></div>
          <div><h5 className="text">  Dove Special Juice 100birr</h5> <hr className="text-white"></hr></div>
          <div className="egg-burger"> <img src={require("../image/juice.png")}/></div>
          <div><h5 className="text"> Daval Fruit Punch 150birr</h5> <hr className="text-white"></hr></div>
          <div className="egg-burger"> <img src={require("../image/juice.png")}/></div>
          <div><h5 className="text"> Single Fruit Punch 100birr</h5> <hr className="text-white"></hr></div>
          <div className="egg-burger"> <img src={require("../image/juice.png")}/></div>
          <div><h5 className="text"> Chocolate Shek 90birr</h5> <hr className="text-white"></hr></div>
          <div className="egg-burger"> <img src={require("../image/juice.png")}/></div>
          <div><h5 className="text">  Strawberry  100birr</h5> <hr className="text-white"></hr></div>
          <div className="egg-burger"><img src={require("../image/juice.png")}/></div>
          <div><h5 className="text"> Strawberries  110birr</h5> <hr className="text-white"></hr></div>
    
        </div>

        {/* <div class="container">
          <div class="row">
            <div class="col-md-1">
            <img id="menu-header-normar"src={require("../image/pizza1.png")}/>
            </div>
            <div class="col-md-3">
              <h1 class="menu-one-header">Normal Burger</h1>
              <p class="menu-one-paragraph"></p>
              <hr></hr>
            </div>
            <div className="col-md-2">
              <p class="menu-price">100 birr</p>
            </div>
          </ div>

        </div>
  */}




{/* <!--		Start Pagination --> */}

 

</div> 






        <>
        <Food/>
   <Footer/>
    </>
        </div>
       


);
}
 export default Menu;
