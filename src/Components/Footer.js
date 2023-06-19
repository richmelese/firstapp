import React from 'react'
import "../stayle/footer.css"
import { FaFacebook,FaTelegram,FaTwitter,FaInstagram, FaLocationArrow, FaMapMarker } from 'react-icons/fa';
export const Footer = () => {
  return (
    <div>
           <div id='scrool' className="Footer1">
             <div className="headfooter">
          <p  class="text-center">
             Let’s start together</p> 
             </div>
 <div className="heading3">
     <p> Phone: +251911581773/ +251910290234</p>
     <p>Located at Goro,Addis Ababa</p>
    <div className="hr"><hr></hr></div> 
 </div> 

        <div className='grid-footer'>
          
          <div className="logo2">
          <div className="logo"> <img src={require("../image/dovelogo .png")}/></div>
      
         </div> 
        
       <div className='link '>
           
           <ul> 
           <p className='pagecolor_page'>Pages</p>
            <li><a href='/Home'>Home</a></li> 
            <li><a href='/About'>About</a></li> 
          <li><a href='/Menu'>Menu</a></li> 
          <li><a href='/ContactUs'>ContactUs</a></li> 
          {/* <li><a href='Team'>Team</a></li>  
          <li><a href='PortifolioSingle'>PortifolioSingle</a></li>   */}
           </ul> 
            
        </div >
        <div className='contactleft'><p className='pagecolor'>Contact</p>
        <p className="email">email:<a href="mailto:muludagne12@gmail.com">muludagne12@gmail.com</a></p>
        </div>
        <div className='social-media'>
          <p className='pagecolor'>Newsletter</p>
          <div className='footerform'>
          
             <form>
            <input type="email" id="email" name="email"className='formbox2'placeholder="enter your email" required></input>
            <input type="submit" value="Submit" className="submitfooter"></input>
            </form>
                </div>
                <div className='pad'>
                  <ul className='social'>
        <li> <a href='#'> <FaFacebook className='icon facebook'/></a></li>
        <li> <a href='#'><FaInstagram className='icon telegram'/></a></li>
        <li><a href='#'><FaTelegram className='icon instagram'/></a> </li>
        <li> <a href='https://www.google.com/maps/place/Hilina+Building+%7C+Goro+%7C+%E1%88%95%E1%88%8A%E1%8A%93+%E1%88%95%E1%8A%95%E1%8D%83+%7C+%E1%8C%8E%E1%88%AE/@8.9908578,38.826787,17z/data=!3m1!4b1!4m6!3m5!1s0x164b9b70b33589fb:0x9f83ad0a7b7dbbe6!8m2!3d8.9908578!4d38.8293673!16s%2Fg%2F11hz9b6n7v'> <FaMapMarker className='icon MapMarker'/> </a> </li>
           </ul>
           </div>
            
       </div>
       
</div>
<div className='hr2'>
  <hr></hr>
</div>


<p className=' campany text-center'>Copyright © 2023 | Designed and developed by <span className='bitappslink'><a href='#'>Rich</a></span> </p>
    </div>
    </div>
  )
}
