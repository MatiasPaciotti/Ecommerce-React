import React from "react";
import Header from "./components/Header";
import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo";
import ProductProvider from "./context/ProductProvider";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <div>
          <Header />
          <main>
            <ProductImage />
            <ProductInfo />
          </main>
        </div>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
