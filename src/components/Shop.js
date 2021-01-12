import React from "react";
// import Menu from "./Menu";
import Navbar from "./Navbar";

const Shop = () => {
  return (
    <>
    <Navbar/>
    <div className="shop">
      <div className="container">
        <div className="shop__text">
          <div>
            <h1>Free Delivery With PIZZA OF THE DAY Only 399 Rupees </h1>
            <div className="shop__btn">
              <a href="" className="btn btn-smart">
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Shop;
