
// import React from "react";
// import sliderImg01 from "../image/slider1.png";
// import sliderImg02 from "../image/slider2.png";
// import sliderImg03 from "../image/slider03";

// export default sliderData = [
//   {
//     id: "01",
//     title: "We have simple and delicious food for you",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi animi, itaque ipsum magnam quae alias omnis veniam dolor fugiat similique voluptas consectetur corrupti odit quisquam incidunt quia architecto voluptate molestiae?",
//     imgUrl: sliderImg01,
//   },
//   {
//     id: "02",
//     title: "We believe good food over great smile",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi animi, itaque ipsum magnam quae alias omnis veniam dolor fugiat similique voluptas consectetur corrupti odit quisquam incidunt quia architecto voluptate molestiae?",
//     imgUrl: sliderImg02,
//   },
//   {
//     id: "03",
//     title: "Meet, Eat and Enjoy the true test",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi animi, itaque ipsum magnam quae alias omnis veniam dolor fugiat similique voluptas consectetur corrupti odit quisquam incidunt quia architecto voluptate molestiae?",
//     imgUrl: sliderImg03,
//   },
// ];
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const slider=()=> {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="pizza1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="burger1.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="berbkew.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default slider;