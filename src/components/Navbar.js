import React from "react";
// import {Link, NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    // <nav classNameNameName="navbar">
    //   <div classNameNameName="navbar__text">
    //     <div classNameNameName="logo">
    //       <img src="/img/logo.png" alt="logo" />
    //     </div>
    //     <ul classNameNameName="navbar__ul">
    //       <li>
    //         <Link href="">Home</Link>
    //       </li>
    //       <li>
    //         <a href="">Menu</a>
    //       </li>
    //       <li>
    //         <a href="">Shop</a>
    //       </li>
    //       <li>
    //         <a href="">News</a>
    //       </li>
    //       <li>
    //         <a href="">Contact</a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/vegpizza">Veg Pizza</a></li>
            <li><a className="dropdown-item" href="/nonvegpizza">Non-Veg Pizza</a></li>
            <li><a className="dropdown-item" href="/beverages">Beverages</a></li>
            <li><a className="dropdown-item" href="/desserts">Desserts</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/shop">Shop</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="/contact">Contact</a>
        </li>

      </ul>
      <button className="btn btn-danger">Login</button>
      
    </div>
  </div>
</nav>
   
  


</>
  );
};

export default Navbar;
