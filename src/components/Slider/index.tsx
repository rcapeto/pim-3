import { useEffect, useState } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { Comment } from '../../interfaces';

import './styles.css';

interface SliderProps {
   comments: Comment[];
}

interface SlideItemProps {
   comment: Comment;
}

export default function Slider({ comments }: SliderProps) {
   const [currentIndex, setCurrentIndex] = useState(0);
   const maxSlides = comments.length;

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

   function formatSlide(withCurrent = false) {
      const slides = document.querySelectorAll('.slide') as NodeListOf<HTMLDivElement>;

      if(!withCurrent) {
         slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * index}%)`;
         });
      } else {
         slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - currentIndex)}%)`;
         });
      }
   }

   useEffect(() => {
      formatSlide(true);
   }, [currentIndex]);

   return(
      <div className="slider-container">
         <h1>Comentários</h1>
         <div className="slider">
            {
               comments.map(comment => <SliderItem comment={comment} key={String(comment.id)}/>)
            }
         </div>
         <div className="slider-buttons">
            <button onClick={prevSlide}>
               <FaAngleLeft color="#fff" size={20}/>
            </button>
            <button onClick={nextSlide}>
               <FaAngleRight color="#fff" size={20}/>
            </button>
         </div>
      </div>
   );
}


function SliderItem({ comment }: SlideItemProps) {
   return(
      <div className="slide">
         <div className="slide-content">
            <h3>"{comment.comment}"</h3>
            <p>{comment.user}</p>
         </div>
      </div>
   );
}