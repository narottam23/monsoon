import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrandSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    'https://innovist.com/cdn/shop/files/Web_2_1512x.webp?v=1690358477',
    'https://innovist.com/cdn/shop/files/Web_Version__2x_b5c80fc0-7a36-422a-88e9-c51c070ea379_1512x.jpg?v=1694779971',
  ];

  return (
    <div>
      <div className="w-full">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="productslide">
              <img src={image} alt={`Slide ${index}`} className="w-full" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BrandSlider;
