import { useEffect, useState, useCallback } from 'react';
import { FaSpinner } from 'react-icons/fa';

import { api } from '../../server/api';
import { Comment, Room } from '../../interfaces';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Slider from '../../components/Slider';
import RoomItem from '../../components/RoomItem';

import './styles.scss';

export default function Home() {
   const [rooms, setRooms] = useState<Room[]>([]);
   const [comments, setComments] = useState<Comment[]>([]);
   const [loading, setLoading] = useState(true);

   const getRooms = useCallback(async () => {
      const { data } = await api.get('/rooms');
      setRooms(data);
      setLoading(false);
   }, []);

   const getComments = useCallback(async () => {
      const { data } = await api.get('/comments');
      setComments(data);
   }, []);

   useEffect(() => {
      getComments();
      getRooms();
      window.scroll({ top: 0, behavior: 'smooth' });
   }, [getComments, getRooms]);

   return(
      <div className="hotel-home">
         <Header />

         <div className="hotel-container m-hotel-container">
            <h4 className="page-info">
               Todos os quartos estão inclusos o nosso perfeito café da manha.
            </h4>
            
            {
               loading && (
                  <div className="loading-home">
                     <FaSpinner color="#000" size={35}/>
                  </div>
               )
            }

            <div className="rooms">
               {
                  rooms.map(room => <RoomItem key={String(room.id)} room={room}/>)
               }
            </div>
               {
                  comments.length ? <Slider comments={comments}/> : null
               }
         </div>

         <Footer />
      </div>
   );
}