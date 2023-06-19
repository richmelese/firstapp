 import React from 'react';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import '../stayle/main.css';
import { Link } from 'react-router-dom';
// import Heroslider from './Hero-slidere/Heroslider';
// import { useState,useEffect } from 'react';


const Navbar = () => {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	}
					
						
						
       
		
// 		<nav class="navbar navbar-expand-lg navbar-light bg-light navbar">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#"><b>Doav Burger and Piza</b></a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
    // <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //   <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li class="nav-item1">
		<a class="nav-link "href="#">Home</a>
		</li> */}
        //   {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
		
		  {/* <a href="#">Home</a>
		  <a href="#">Home</a>
		  <a href="#">Home</a>
		  <a href="#">Home</a> */}
		  
       
        // <li class="nav-item3">
        //   <a href="/">Home</a>
		//   <a href="#">menu</a>
		//   <a href="#">Products</a>
		//   <a href="#">Contact</a>
		//   <a href="#">About</a>
		 
		 
		  {/* <a class="nav-link" href="#">menu</a>
		  <a class="nav-link" href="#">Products</a> */}
		  {/* <li className="nav-items container">
		  <ul>
						
						 				<li><a href="#">Home</a></li>
						 				<li><span class="fa fa-phone"><a href="#">Contact</a></span></li>
						 				<li><span class="fa fa-About"><a href="#">About</a></span></li>
										<li><span class="fa fa-phone"><a href="#">menu</a></span></li>
										<li><span class="fa fa-phone"><a href="#">Products</a></span></li>
										</ul>
		  </li> */}
        //</li>
		{/* <li class="nav-item">
          <a class="nav-link" href="#">Products</a>
        </li> */}
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Home</a></li>
            <li><a class="dropdown-item" href="#">Contact</a></li>
             <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>  */}
        {/* <li class="nav-item">
          <a class="nav-link" href="#">menu</a>
        </li> */}
       // </ul>
//       <form class="d-flex">
// //         {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
// //         <button class="btn btn-outline-success" type="submit">Search</button>
// //       </form> 
	 
//     </div>
//   </div>
// </nav>
//  	);
//  }; 

// export default Navbar;


	return (
	
		<div className='header2'>
				<header>
			<div className="logo"><h2><span><i class="ri-restaurant-2-fill"></i></span>Dove Burger</h2></div>
			<nav ref={navRef}>
				<ul className='navbar__ul'>
				<a href="/">Home</a>
				<a href="/Menu">menu</a>
				<a href="/Contact">Contact</a>
				<a href="/About">About</a>
				<a href="/Product">Product</a>
				</ul>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
			
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
{/* 
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
	</div> */}
  </div>
		//  </div>
	
	
	);
}


export default Navbar;