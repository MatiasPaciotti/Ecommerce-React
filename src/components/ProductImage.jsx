import React from "react";
import productImage1 from "../assets/image-product-1.jpg";
import productImage2 from "../assets/image-product-2.jpg";
import productImage3 from "../assets/image-product-3.jpg";
import productImage4 from "../assets/image-product-4.jpg";
import productImageMin1 from "../assets/image-product-1-thumbnail.jpg";
import productImageMin2 from "../assets/image-product-2-thumbnail.jpg";
import productImageMin3 from "../assets/image-product-3-thumbnail.jpg";
import productImageMin4 from "../assets/image-product-4-thumbnail.jpg";
import prev from "../assets/icon-previous.svg";
import next from "../assets/icon-next.svg";
import "../styles/main.css";
import Lightbox from "./Lightbox";

const ProductImage = () => {
  const [current, setCurrent] = React.useState(0);
  const [modal, setModal] = React.useState(false);
  const images = [productImage1, productImage2, productImage3, productImage4];
  const slidesLenght = images.length;

  const nextSlide = () => {
    setCurrent(current === slidesLenght - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slidesLenght - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  const closeModal = () => {
    setModal(!modal);
  };

  return (
    <div className="slider">
      <img src={prev} alt="prev" className="prev" onClick={prevSlide} />

      {images.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                onClick={() => setModal(!modal)}
                src={slide}
                alt=""
                className="product-image"
              />
            )}
          </div>
        );
      })}

      <div className="gallery">
        <img
          className="images-gallery"
          onClick={() => setModal(!modal)}
          src={productImageMin1}
          alt=""
        />
        <img
          className="images-gallery"
          onClick={() => setModal(!modal)}
          src={productImageMin2}
          alt=""
        />
        <img
          className="images-gallery"
          onClick={() => setModal(!modal)}
          src={productImageMin3}
          alt=""
        />
        <img
          className="images-gallery"
          onClick={() => setModal(!modal)}
          src={productImageMin4}
          alt=""
        />
      </div>

      {modal && <Lightbox closeModal={closeModal} />}

      <img src={next} alt="next" className="next" onClick={nextSlide} />
    </div>
  );
};

export default ProductImage;
