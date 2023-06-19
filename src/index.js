// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// //import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createBrowserRouter,RouterProvider,Route } from 'react-router-dom';
import Contact from './pages/Contact';
import 'remixicon/fonts/remixicon.css'
import About from './Components/About';
import Menu from './Components/Menu';
import Product from './pages/Product';
import Home from './pages/Home';

// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

const router = createBrowserRouter([
   {
     path: "/",
     element:<App/>
     
   },
   {
     path: "about",
     element: <About/>,
   },
   {
      path: "Contact",
      element: <Contact/>,
    },
    {
      path: "Menu",
      element: <Menu/>,
    },
    {
      path: "Product",
      element: <Product/>,
    },
    {
      path: "Home",
      element: <Home/>,
    },
 ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterProvider router={router} />
//  <React.StrictMode>
//     <BrowserRouter>
//        <App />
//     </BrowserRouter>
//  </React.StrictMode>

);

