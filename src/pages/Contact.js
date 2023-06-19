
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navmenu from "../pages/Navmenu";
import {Footer} from "../Components/Footer";
import "../stayle/contact.css";

  
const Contact =() =>{
 return (
        <div>
            <Navmenu/>
        
    <div className='grid__contact'>
      {/* <div className='grid-map'> <img src={require("../image/map.png")}/></div> */}
      {/* <div className='grid_form'> */}
      
      <div className='map'>
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7965178888912!2d38.82679237392315!3d8.990863089587018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b70b33589fb%3A0x9f83ad0a7b7dbbe6!2zSGlsaW5hIEJ1aWxkaW5nIHwgR29ybyB8IOGIleGIiuGKkyDhiJXhipXhjYMgfCDhjI7hiK4!5e0!3m2!1sen!2sca!4v1686319622465!5m2!1sen!2sca" ></iframe>
       </div>
      <div className="subdiv1">
   
   <label className="formcolor">FullName </label><br></br>
      <input type="text" id="fname" name="firstname" placeholder="Your Name.." className="formbox" required></input> <br></br>
     <label className="formcolor">email</label> <br></br>
      <input type="text" id="fname" name="firstname" placeholder="example@gmail.com.." className="formbox" required></input>
     
      </div>
      <div className="subdiv2">
       
     <label className="formcolor">Phone</label> <br></br>
      <input type="text" id="fname" name="firstname" placeholder="Your Phone no." className="formbox" required></input><br></br>
      <label className="formcolor">Subject</label> <br></br>
      <input type="text" id="fname" name="firstname" placeholder="Your Subject." className="formbox" required></input><br></br>
      </div>
      <div></div>
      <div className='messagebox'>
        <form>
   <label className="formcolortext" >Leave us a message</label><br></br>
         <textarea id="subject" name="subject" placeholder="Write something.."className="txtarea" required></textarea><br></br>
<input type="submit" value="Send Message" className="submit-button"></input>
        {/* <button class="submit-button">submit</button> */}
        </form>
    </div>
          
       </div>
       <Footer/>
       </div>
     
   
      
 );
}
 export default Contact;