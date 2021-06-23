import "../styles.scss";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useState } from "react";
import CarouselImg from "./CarouselImg";
const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === CarouselImg.length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? CarouselImg.length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {CarouselImg.map((img, index) => {
        return current === index ? (
          <div key={index} className="slide">
            <img src={img.image} alt="images" />
          </div>
        ) : null;
      })}
    </div>
  );
};
export default Carousel;
