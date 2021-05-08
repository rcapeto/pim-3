import { Link } from 'react-router-dom';
import { Room } from '../../interfaces';

import './styles.scss';

interface RoomItemProps {
   room: Room;
}

export default function RoomItem({ room }: RoomItemProps) {
   return(
      <div className="room-item">
        <div className="room-info">
            <h1>{room.name}</h1>
            <p>{room.about}</p>
            <Link to={`/rooms/${room.id}`}>Explore</Link>
        </div>
        
        <div className="room-image">
         <img src={room.images[0]} alt={room.name} />
        </div>
      </div>
   );
}