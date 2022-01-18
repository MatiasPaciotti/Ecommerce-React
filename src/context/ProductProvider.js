import React, { useState, useEffect } from "react";

export const ProductContext = React.createContext();

const ProductProvider = (props) => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      async function fetchApi() {
        const response = await fetch(
          "https://www.mockachino.com/b045b644-d886-4e/products/7d6f7710-95d0-4a27-ae6c-b02c6cb0348f"
        );
        const data = await response.json();
        setProduct(data);
        setLoading(true);
      }
      fetchApi();
    } catch (error) {
      setLoading(true);
      setError(error);
    }
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <ProductContext.Provider value={{ product }}>
        {props.children}
      </ProductContext.Provider>
    );
  }
};

export default ProductProvider;
