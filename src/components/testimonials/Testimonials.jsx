import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';
import testimonial1 from '../../assets/testimonials/test1.jpeg';
import testimonial2 from '../../assets/testimonials/test2.jpeg';
import testimonial3 from '../../assets/testimonials/test3.jpeg';
import testimonial4 from '../../assets/testimonials/test4.jpeg';
import testimonial5 from '../../assets/testimonials/test5.jpeg';
import testimonial6 from '../../assets/testimonials/test6.jpeg';
import testimonial7 from '../../assets/testimonials/test7.jpeg';
import testimonial8 from '../../assets/testimonials/test8.jpeg';
import testimonial9 from '../../assets/testimonials/test9.jpeg';


const testimonialData = [
  { id: 1, image: testimonial1, text: 'Testimonial 1' },
  { id: 2, image: testimonial2, text: 'Testimonial 2' },
  { id: 3, image: testimonial3, text: 'Testimonial 3' },
  { id: 4, image: testimonial4, text: 'Testimonial 4' },
  { id: 5, image: testimonial5, text: 'Testimonial 5' },
  { id: 6, image: testimonial6, text: 'Testimonial 6' },
  { id: 7, image: testimonial7, text: 'Testimonial 7' },
  { id: 8, image: testimonial8, text: 'Testimonial 8' },
  { id: 9, image: testimonial9, text: 'Testimonial 9' },
];


const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideIntervalRef = useRef(null); 

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimonialData.length - 1 : prevSlide - 1));
    resetAutoSlide();
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === testimonialData.length - 1 ? 0 : prevSlide + 1));
    resetAutoSlide();
  };

  const autoSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === testimonialData.length - 1 ? 0 : prevSlide + 1));
  };

  const resetAutoSlide = () => {
    clearInterval(slideIntervalRef.current);
    slideIntervalRef.current = setInterval(autoSlide, 5000); 
  };

  useEffect(() => {
    slideIntervalRef.current = setInterval(autoSlide, 5000); 
    return () => clearInterval(slideIntervalRef.current);
  }, []);

  // Pause auto-sliding when the cursor enters the slider
  const handleMouseEnter = () => {
    setIsPaused(true);
    clearInterval(slideIntervalRef.current);
  };

  // Restart auto-sliding when the cursor leaves the slider
  const handleMouseLeave = () => {
    setIsPaused(false);
    resetAutoSlide();
  };

  return (
    <section id='testimonials'>
      <div
        className='slider-container'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className='testimonial-image' src={testimonialData[currentSlide].image} alt='' />
        <p className='testimonial-text'>{testimonialData[currentSlide].text}</p>
      </div>
      <div className='slider-buttons'>
        <button onClick={handlePrevSlide}>Previous</button>
        <button onClick={handleNextSlide}>Next</button>
      </div>
    </section>
  );
};

export default Testimonials;
