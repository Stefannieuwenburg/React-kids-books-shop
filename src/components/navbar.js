import React from "react";
import "../styles/navbar.css";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_bar">
        <button className="my_shop" onClick={() => setShow(true)}>
          My Shop
        </button>
        <h1 className="title">Kids Books Shop</h1>
        <div className="cart" onClick={() => setShow(false)}>
          <button className="fas fa-cart-plus cart_btn">
          </button>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
