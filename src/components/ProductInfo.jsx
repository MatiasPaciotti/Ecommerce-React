import React from "react";
import cartIcon from "../assets/icon-cart-colorWhite.svg";
import restIcon from "../assets/icon-minus.svg";
import plusIcon from "../assets/icon-plus.svg";
import { CartContext } from "../context/CartProvider";
import { ProductContext } from "../context/ProductProvider";
import "../styles/main.css";

const ProductInfo = () => {
  const { product } = React.useContext(ProductContext);
  const { setCart } = React.useContext(CartContext);
  const [counter, setCounter] = React.useState(0);

  const rest = () => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  };

  const sum = () => {
    setCounter(counter + 1);
  };

  const addToCart = () => {
    setCart([
      {
        quantity: counter,
        price: product.price - product.discount * product.price,
        product: product.name,
        total: (product.price - product.discount * product.price) * counter,
        id: product.id,
      },
    ]);
    setCounter(0);
  };

  return (
    <div className="product-info">
      <h4>{product.brand}</h4>
      <h2>{product.name}</h2>
      <p>{product.description}</p>

      <div className="product-price-box">
        <p>$ {product.price - product.discount * product.price}</p>
        <p className="product-discount">
          {Math.round(product.discount * 100)}%
        </p>
        <p className="product-original-price">$ {product.price}</p>
      </div>

      <div className="product-counter">
        <button className="btn-counter" onClick={() => rest()}>
          <img src={restIcon} alt="rest" />
        </button>

        {counter}
        <button className="btn-counter" onClick={() => sum()}>
          <img src={plusIcon} alt="plus" />
        </button>
      </div>

      <button
        className="add-to-cart"
        onClick={() => addToCart()}
        disabled={counter === 0}
      >
        <img src={cartIcon} alt="cart" />
        <span className="btn-text">Add to cart</span>
      </button>
    </div>
  );
};

export default ProductInfo;
