import "./ImageSlider.css";
import chevronLeft from "../../assets/svg/chevron-left.svg";
import chevronRight from "../../assets/svg/chevron-right.svg";

import { useState, useEffect } from "react";

function ImageSlider(props) {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setImages(props.images);
  }, [props.images]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <div className="image-slider-container">
      <div className="image-chevron" onClick={previousImage}>
        <img src={chevronLeft} alt="Previous" />
      </div>

      <div className="slider-main-container">
      <img className="slider-main-image" src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <div className="indicators">
          {images.map((_, index) => (
            <div
              key={index}
              className={`indicator-dot ${index === currentIndex ? "active" : ""}`}
              style={{ width: index === currentIndex ? "30px" : "10px" }} // Adjust the width as needed
            ></div>
          ))}
        </div>
      </div>

      <div className="image-chevron" onClick={nextImage}>
        <img src={chevronRight} alt="Next" />
      </div>
    </div>
  );
}
export default ImageSlider;
