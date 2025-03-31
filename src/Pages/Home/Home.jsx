import React, { useState } from "react";
import "./Home.css";

import Percent from "../../assets/images/home/percent.jpg";
import customer from "../../assets/images/home/customer-testimonial.jpg";
import one from "../../assets/images/home/1.jpg";
import two from "../../assets/images/home/2.jpg";
import three from "../../assets/images/home/3.jpg";
import four from "../../assets/images/home/4.jpg";
import five from "../../assets/images/home/5.jpg";
import { Tooltip } from "react-tooltip";
import hardToFind from "../../assets/images/home/hard-to-find.jpg";
import weShip from "../../assets/images/home/we-ship.jpg";
import MultipleItems from "../../Components/MultipleProducts/MultipleProducts";
const carouselImages = [customer, customer];

const categories = ["FEATURED", "BEST SELLERS", "NEW ARRIVALS", "SPECIALS", "CISCO"];

const products = [
  {
    id: 1,
    name: "Cisco M-ASR1001X-16GB",
    price: "$88.95",
    image: one,
    category: "FEATURED",
  },
  {
    id: 2,
    name: "Cisco M-ASR1002X-16GB",
    price: "$124.95",
    image: two,
    category: "BEST SELLERS",
  },
  {
    id: 3,
    name: "Cisco SPDA17806/21703G",
    price: "$89.95",
    image: three,
    category: "NEW ARRIVALS",
  },
  {
    id: 4,
    name: "Cisco VWIC2-1MFT-T1/E",
    price: "$13.95",
    image: four,
    category: "SPECIALS",
  },
  {
    id: 5,
    name: "Cisco MEM-7835-H1-1GB",
    price: "$26.95",
    image: five,
    category: "CISCO",
  },
  {
    id: 6,
    name: "Cisco CAB-DFC-OCTAL-1M",
    price: "Click for Quote",
    image: five,
    category: "FEATURED",
  },
  {
    id: 7,
    name: "Cisco CAB-RPS-1614",
    price: "$22.95",
    image: four,
    category: "CISCO",
  },
];

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("FEATURED");

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {carouselImages.map((img, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                      <img src={img} className="d-block w-100" alt={`Slide ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
              </div>
            </div>

            <div className="col-md-5">
              <a href="">
                <img src={Percent} alt="" className="w-100" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="category-nav">
            {categories.map((category) => (
              <div key={category} className={category === selectedCategory ? "active" : ""} onClick={() => setSelectedCategory(category)}>
                {category}
              </div>
            ))}
          </div>

          <div className="product-container">
            {products
              .filter((product) => product.category === selectedCategory)
              .map((product) => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <p className="product-name">{product.name}</p>
                  <p className="product-price">{product.price}</p>
                  <div className="product-actions">
                    <button className="cart-btn" data-tooltip-id="cartTooltip" data-tooltip-content="Add to Cart">
                      <i className="fas fa-cart-arrow-down"></i>
                    </button>
                    <Tooltip id="cartTooltip" />

                    <button className="wishlist-btn" data-tooltip-id="wishlistTooltip" data-tooltip-content="Add to Wish List">
                      <i className="far fa-heart"></i>
                    </button>
                    <Tooltip id="wishlistTooltip" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <img src={hardToFind} alt="" className="w-100" />
            </div>
            <div className="col-md-5">
              <img src={weShip} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <MultipleItems />
        </div>
      </section>
    </>
  );
}

export default Home;
