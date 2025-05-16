// components/common/Carousel.jsx
import { useState, useEffect } from 'react';

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotacionar slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={slide.image} alt={slide.alt} />
            <div className="carousel-caption">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <a href={slide.link} className={`btn bg-${slide.buttonColor}`}>
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}

        <button className="carousel-btn prev" onClick={goToPrevSlide}>
          &#10094;
        </button>
        <button className="carousel-btn next" onClick={goToNextSlide}>
          &#10095;
        </button>
      </div>
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;