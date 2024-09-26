import React, { useState, useEffect } from "react";
import img1 from "../assest/banner/banner1.jpg";
import img2 from "../assest/banner/banner2.jpg";
import img3 from "../assest/banner/banner3.jpg";
import img4 from "../assest/banner/banner4.png";
import img5 from "../assest/banner/banner5.png";
const slides = [
  {
    image: img1,
    text: "Welcome to Slide 1",
  },
  {
    image: img2,
    text: "Discover Slide 2",
  },
  {
    image: img3,
    text: "Explore Slide 3",
  },
  {
    image: img4,
    text: "Experience Slide 4",
  },
  {
    image: img5,
    text: "Enjoy Slide 5",
  },
];

const BannerProduct = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Chuyển slide mỗi 3 giây

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full h-[40rem] md:h-[30rem] sm:h-[20rem] sm:min-w-[320px] overflow-hidden z-20">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full md:h-auto sm:h-auto sm:object-contain"
            style={{ objectFit: "contain" }}
          />
        </div>
      ))}
    </div>
  );
};

export default BannerProduct;
