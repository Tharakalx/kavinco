import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const images = [
     "src/assets/images/slider1.jpg",
  "src/assets/images/slider2.jpg",
    // "/images/slider3.jpg",
    // "/images/slider4.jpg",
    // "/images/slider5.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-4">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-2">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="rounded-2xl w-full h-[600px] object-cover shadow-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
