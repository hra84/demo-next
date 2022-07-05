import { Rate } from "antd";
import React from "react";

function ProductDetailReviewItem({ data }) {
  console.log(data);
  return (
    <div className="product-detail-review-item">
      <div className="product-detail-review-item__avatar">
        <img
          src="https://thispersondoesnotexist.com/image"
          alt="Reviewer avatar"
        />
        <Rate disabled defaultValue={4} />
      </div>
      <div className="product-detail-review-item__content">
        <h5>May 04, 2020</h5>
        <h3>John smith</h3>
        <p>
          As a result of innovations in orthodontic materials, orthodontists are
          able to provide today’s patients with a comfortable and convenient
          experience while working toward the ultimate goal of a healthy, a good
          bite and improved facial appearance.
        </p>
      </div>
    </div>
  );
}

export default React.memo(ProductDetailReviewItem);
