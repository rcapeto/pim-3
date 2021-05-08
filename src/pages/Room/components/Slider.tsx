import { useState, useEffect, MouseEvent } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

interface SliderRoomProps {
   items: string[];
   roomName: string;
}

export default function SliderImage({ items, roomName }: SliderRoomProps) {
   const [currentIndex, setCurrentIndex] = useState(0);
   const maxSlides = items.length;

   function nextSlide() {
      let index = currentIndex + 1;

      if(index >= maxSlides) index = 0;

      setCurrentIndex(index);
   }

   function prevSlide() {
      let index = currentIndex - 1;

      if(index < 0) index = maxSlides - 1;

      setCurrentIndex(index);
   }

   function openImage(event: MouseEvent) {
      const image = event.target as HTMLImageElement;

      window.open(image.src);
   }


   function formatImageSlide() {
      const slides = document.querySelectorAll('.image-slider .slide') as NodeListOf<HTMLImageElement>;

      slides.forEach((slide, index) => {
         slide.style.transform = `translateX(${100 * (index - currentIndex)}%)`;
      });
   }

   useEffect(() => {
      formatImageSlide();
   }, [currentIndex]);

   return(
      <div className="image-slider">
         <div className="image-slider-buttons">
            <button onClick={prevSlide}>
               <FaAngleLeft color="#fff" size={20}/>
            </button>
            <button onClick={nextSlide}>
               <FaAngleRight color="#fff" size={20}/>
            </button>
         </div>
         {
               items.map((image, index) => (
                  <img 
                     src={image} 
                     alt={roomName} 
                     key={String(index)} 
                     className="slide" 
                     onClick={openImage}
                  />
               ))
            }
      </div>
   );
}