import React from "react";
// import Log from "../../src/assests/log.png";
import "../stayle/navmenu.css"
const Menu = () => {
  return (
    <div>
      <section className="NavMenu__section">
        <header className="header">
          <div className="logo1">
          {/* <div className="logo1"><h2><span><i class="ri-restaurant-2-fill"></i></span>Dove Burger</h2></div> */}
            < img src={require("../image/dovelogo .png")}/>
           
          </div>
          <div className="navigation">
            <input type="checkbox" className="toggle-menu" />
            <div className="hamburger"></div>

            <ul className="menu">
              <li>
                <a href="./">Home</a>
              </li>
              <li>                                          
              <a href="/About">About</a>
               
              </li>
              
              <li>
              <a href="/Menu">Menu</a>
              </li>
              <li>
                <a href="/Contact">Contact</a>
              </li>
              <li>
              
              
              </li>
              {/* <li>
                <a href="/news">products</a>
              </li> */}
              <li>
                {/* <a href="/contact">
                  <button className="menu-contacus-btn">
                    <p class="btn-contact-us">Contact us</p>
                  </button>
                </a> */}
              </li>
            </ul>
          </div>
        </header>
      </section>
    </div>
  );
};

export default Menu