import { useState, useEffect, useCallback, useMemo } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Slider from '../../components/Slider';

import { HARHotel, installationsItems } from '../../utils';
import { Comment } from '../../interfaces';
import { api } from '../../server/api';


import './styles.scss';

export default function Installations() {
   const [comments, setComments] = useState<Comment[]>([]);

   const getComments = useCallback(async () => {
      const { data } = await api.get('/comments');
      setComments(data);
   }, []);

   useEffect(() => {
      getComments();
   }, [getComments]);


   return(
      <div className="installations-page">
         <Header />

         <div className="hotel-container m-hotel-container">
            <h1 className="page-info">Instalações</h1>

            <p className="page-sub-info">
               Queremos que a sua estadia no nosso luxuoso hotel seja verdadeiramente inesquecível. 
               É por isso que damos atenção especial a todas as suas necessidades paraque podemos 
               garantir uma experiência bastante única. Os hotéis de luxo oferecem o cenário perfeito 
               com vistas deslumbrantes para o lazer e nossas modernas instalações de resort de luxo 
               o ajudarão a aproveitar o melhor de todos.
            </p>

            <div className="installations">
               {
                  installationsItems.map(installation => (
                     <div className="installation" key={String(installation.id)}>
                        <img src={installation.value} alt={installation.name} />
                        
                        <div className="installation-label">
                           {installation.name}
                        </div>
                     </div>
                  ))
               }
            </div>
         </div>

         <Footer />
      </div>
   );
}