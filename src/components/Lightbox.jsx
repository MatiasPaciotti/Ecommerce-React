import React, { useState } from "react";
import productImage1 from "../assets/image-product-1.jpg";
import productImage2 from "../assets/image-product-2.jpg";
import productImage3 from "../assets/image-product-3.jpg";
import productImage4 from "../assets/image-product-4.jpg";
import productImageMin1 from "../assets/image-product-1-thumbnail.jpg";
import productImageMin2 from "../assets/image-product-2-thumbnail.jpg";
import productImageMin3 from "../assets/image-product-3-thumbnail.jpg";
import productImageMin4 from "../assets/image-product-4-thumbnail.jpg";
import closeItem from "../assets/icon-close.svg";
import prev from "../assets/icon-previous.svg";
import next from "../assets/icon-next.svg";
import "../styles/lightbox.css";

const Lightbox = ({ closeModal }) => {
  const images = [productImage1, productImage2, productImage3, productImage4];
  const imagesThumbnail = [
    productImageMin1,
    productImageMin2,
    productImageMin3,
    productImageMin4,
  ];
  const [current, setCurrent] = useState(0);
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

  return (
    <div className="myModal">
      <div className="images-box">
        <img
          className="close-item"
          onClick={() => closeModal()}
          src={closeItem}
          alt=""
        />

        <div className="main-image">
          <button className="prev-modal" onClick={prevSlide}>
            <img src={prev} alt="" />
          </button>

          {images.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <img src={slide} alt="" className="image-modal" />
                )}
              </div>
            );
          })}

          <button className="next-modal" onClick={nextSlide}>
            <img src={next} alt="" />
          </button>
        </div>
        <div className="modal-gallery">
          <img
            className="image-modal-gallery"
            src={imagesThumbnail[0]}
            alt=""
          />
          <img
            className="image-modal-gallery"
            src={imagesThumbnail[1]}
            alt=""
          />
          <img
            className="image-modal-gallery"
            src={imagesThumbnail[2]}
            alt=""
          />
          <img
            className="image-modal-gallery"
            src={imagesThumbnail[3]}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
