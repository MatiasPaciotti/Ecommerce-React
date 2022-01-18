import React from "react";
import logo from "../assets/logo.svg";
import menuIcon from "../assets/icon-menu.svg";
import cartIcon from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import closeIcon from "../assets/icon-close.svg";
import "../styles/header.css";
import { CartContext } from "../context/CartProvider";
import ProductCard from "./ProductCard";

const Header = () => {
  const { cart } = React.useContext(CartContext);
  const [displayMenu, setDisplayMenu] = React.useState(false);
  const [displayCart, setDisplayCart] = React.useState(false);

  const openMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  const openCart = () => {
    setDisplayCart(!displayCart);
  };

  return (
    <header className="header-nav">
      <div className="header-item">
        <img
          className="icon-menu"
          src={menuIcon}
          alt="menu"
          onClick={() => openMenu()}
        />
        <img src={logo} className="nav-icon-logo" alt="logo" />
        <ul className="list-menu">
          <li>
            <a href="#foo">Collections</a>
          </li>
          <li>
            <a href="#foo">Men</a>
          </li>
          <li>
            <a href="#foo">Women</a>
          </li>
          <li>
            <a href="#foo">About</a>
          </li>
          <li>
            <a href="#foo">Contact</a>
          </li>
        </ul>

        {displayMenu && (
          <div className="main-menu">
            <div className="list-group">
              <img
                src={closeIcon}
                className="close-icon"
                alt="close"
                onClick={() => openMenu()}
              />
              <ul className="list-menu-mobile">
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className="header-item">
        <img
          src={cartIcon}
          className="nav-icon-cart"
          alt="cart"
          onClick={() => openCart()}
        />

        <img className="avatar-user" src={avatar} alt="user" />

        {displayCart && (
          <div className="cart-menu">
            <h4>Cart</h4>
            <div className="cart-items">
              {cart.length > 0 ? (
                <ProductCard />
              ) : (
                <p className="cart-description">Your cart is empty.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
