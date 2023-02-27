import React, { useState } from "react";
import PictureComponent from "./PictureComponent";
import "./ProductCard.css";

export const ProductCard = (props) => {
  const [isProductCardtVisible, setProductCardVisible] = useState(true);

  const productCardVisible = () => {
    setProductCardVisible(!isProductCardtVisible);
  };

  return (
    <div>
      {isProductCardtVisible && (
        <div className="productCard">
          <h2>{props.title}</h2>
          <div>
            <PictureComponent images={props.images} />
          </div>
          <h4>{props.description}</h4>
          <h3>{props.price}</h3>
        </div>
      )}
      <button className="btn" onClick={productCardVisible}>
        Hide Card product
      </button>
    </div>
  );
};

export default ProductCard;
