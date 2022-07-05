import Slider from "react-slick";
import React from "react";

function ProductDetailImageThree({ imageData }) {
  const settings = {
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "500px",
    slidesToShow: 1,
    speed: 500,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          centerPadding: "400px",
        },
      },
      {
        breakpoint: 1400,
        settings: {
          centerPadding: "300px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: "80px",
        },
      },
    ],
  };
  return (
    <div className="product-detail-image-three">
      <Slider {...settings}>
        {imageData.map((item, index) => (
          <div className="slider-item" key={index}>
            <img src={process.env.PUBLIC_URL + item} alt="Product image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default React.memo(ProductDetailImageThree);
