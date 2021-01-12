import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../pages/Footer";
import About from "./About";
import Clients from "./Clients";
import Navbar from "./Navbar";
import Prices from "./Prices";
import Shop from "./Shop";
const Header = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Pizza Devlivery</h3>
            <h1>FOOD HUB</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              minus ut mollitia error molestiae quia.
            </p>
            <div className="banner__btn">
              <NavLink to="" className="btns btn-smart">
                DEVLERY NOW
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <About />
      <div className="shop">
        <div className="container">
          <div className="shop__text">
            <div>
              <h1>Free Delivery With PIZZA OF THE DAY Only 399 Rupees</h1>
              <div className="shop__btn">
                <NavLink to="/shop" className="btn btn-smart">
                  SHOP NOW
              </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Prices />
      {/* <Clients/> */}
      <Footer/>
    </div>
  );
};

export default Header;
