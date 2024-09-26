import { useState, useEffect } from 'react';
import Image from 'next/image';
import gamburger2 from '../../assets/images/hg3-removebg-preview.png';
import gamburger3 from '../../assets/images/hg4-removebg-preview.png';
import gamburger4 from '../../assets/images/hg5-removebg-preview.png';
import './intro.css';

const Carousel: React.FC = () => {
  const images = [ gamburger2, gamburger3, gamburger4, gamburger2, gamburger3, gamburger4, gamburger2, gamburger3, gamburger4, gamburger2, gamburger3, gamburger4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      <div
        className="carousel-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease-in-out' }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <Image src={image} alt={`Slide ${index}`} layout="responsive" objectFit="cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
