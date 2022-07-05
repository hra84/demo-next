import React from "react";

function ProductDetailImageTwo({ imageData }) {
  return (
    <div className="product-detail-image-two">
      {imageData &&
        imageData.map((item, index) => (
          <img
            key={index}
            src={process.env.PUBLIC_URL + item}
            alt="Product image"
          />
        ))}
    </div>
  );
}

export default React.memo(ProductDetailImageTwo);
