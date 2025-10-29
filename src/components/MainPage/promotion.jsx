import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import promotionImage2 from "../../images/Promotion2.png";
import promotionImage3 from "../../images/Promotion3.png";
import promotionImage4 from "../../images/Promotion4.png";

const Promotion = () => {
  const promotionImages = [
    { id: 1, image: promotionImage2 },
    { id: 2, image: promotionImage3 },
    { id: 3, image: promotionImage4 },
  ];

  const extendedPromotionImages = [
    promotionImages[promotionImages.length - 1],
    ...promotionImages,
    promotionImages[0],
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef(null);


  useEffect(() => {
    const startInterval = () => {
      timeoutRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 4000);
    };

    startInterval();

    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (currentIndex === extendedPromotionImages.length - 1) { 
      setIsTransitioning(false); 
      timeoutRef.current = setTimeout(() => { 
        setCurrentIndex(1);
        setIsTransitioning(true); 
      }, 500); 
    } else if (currentIndex === 0) { 
      setIsTransitioning(false); 
      timeoutRef.current = setTimeout(() => { 
        setCurrentIndex(promotionImages.length);
        setIsTransitioning(true); 
      }, 500); 
    }
  }, [currentIndex, extendedPromotionImages.length, promotionImages.length]);

  const goToSlide = (index) => {
    if (timeoutRef.current) { 
      clearInterval(timeoutRef.current);
    }
    setCurrentIndex(index + 1); 
  };



  return (
    <PromotionContainer>
      <ImageSliderWrapper 
      currentIndex={currentIndex} 
      imageCount={promotionImages.length}
      isTransitioning={isTransitioning}
      >
         {extendedPromotionImages.map((image, index) => (
          <PromotionImage 
            key={index} 
            src={image.image} 
            alt={`promotion Banner ${index + 1}`} 
          />
        ))}
      </ImageSliderWrapper>

      <PaginationDotsContainer>
      {promotionImages.map((_, index) => (
          <PaginationDot 
            key={index} 
            active={index === (currentIndex - 1)} 
            onClick={() => goToSlide(index)} 
          />
        ))}
      </PaginationDotsContainer>
    </PromotionContainer>
  );
};

export default Promotion;

const PromotionContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 400px;
`;

const ImageSliderWrapper = styled.div`
  display: flex;
  width: ${props => props.imageCount * 100}vw; 
  height: 100%;
  transform: translateX(-${props => props.currentIndex * 100}vw); 
  transition: ${props => props.isTransitioning ? 'transform 0.5s ease-in-out' : 'none'};
`


const PromotionImage = styled.img`
  width: 100vw;
  height:  400px; 
  flex-shrink: 0; 
  object-fit: cover;
`;

const PaginationDotsContainer = styled.div`
  position: absolute; 
  bottom: 15px; 
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px; 
  z-index: 20; 
`;


const PaginationDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.active ? '#00468e' : '#ccc')};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => (props.active ? '#00468e' : '#999')};
  }
`;