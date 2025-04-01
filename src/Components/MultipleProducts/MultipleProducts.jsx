import React from "react";
import Slider from "react-slick";
import "./MultipleProducts.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import one from "../../assets/images/home/1.jpg"

const manufacturers = [
  { name: "IBM", logo: one },
  { name: "Juniper Networks", logo: one },
  { name: "Motorola", logo: one },
  { name: "Nortel", logo: one },
  { name: "Polycom", logo: one },
  { name: "Sun Microsystems", logo: one },
  { name: "ADC Kentrox", logo: one },
  { name: "Extreme Networks", logo: one },
  { name: "Extreme Networks", logo: one },
  { name: "Extreme Networks", logo: one },
  { name: "Extreme Networks", logo: one },
];

function MultipleItems() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <h3>Shop by Manufacturer</h3>
      <Slider {...settings}>
        {manufacturers.map((item, index) => (
          <div key={index} className="manufacturer-card">
            <div className="card">
              <img src={item.logo} alt={item.name} className="manufacturer-logo" />
              <p className="manufacturer-name">{item.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultipleItems;
