import React from "react";
import productImage from "../assets/image-product-4-thumbnail.jpg";
import deleteItem from "../assets/icon-delete.svg";
import { CartContext } from "../context/CartProvider";
import "../styles/productCard.css";
import { ProductContext } from "../context/ProductProvider";

const ProductCard = () => {
  const { cart, setCart } = React.useContext(CartContext);
  const { product } = React.useContext(ProductContext);

  const deleteItems = () => {
    return setCart({
      quantity: 0,
      price: 0,
      product: "",
      total: 0,
      id: "",
    });
  };

  return (
    <div className="card-container">
      <div className="product-card">
        {cart.map((item) => {
          return (
            <div className="product-cart" key={product.id}>
              <img src={productImage} className="image-cart" alt="" />
              <ul className="cart-list">
                <li className="product-info-cart">{item.product}</li>
                <li className="product-info-cart">
                  $ {item.price} x {item.quantity} $ {item.total}
                </li>
              </ul>
              <button className="delete-button" onClick={() => deleteItems()}>
                <img className="delete-icon" src={deleteItem} alt="delete" />
              </button>
            </div>
          );
        })}
        <button className="btn-checkout">Checkout</button>
      </div>
    </div>
  );
};

export default ProductCard;
