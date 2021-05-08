import './index.scss';

import { useState, useEffect } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import { api } from '../../server/api';
// import {} from '../../interfaces';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

export default function RoomsPage() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadApiRooms() {
            const response = await api.get('rooms');
            setRooms(response.data);
            setLoading(false);
        };
        loadApiRooms();
    }, []);


    function maskPrice(prices) {
        let price = parseInt(prices).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        return price;
    }

    if (loading) {
        return (
          <div>
            <Header />
            <p>Loading ...</p>
            <Footer />
          </div>
        );
      }


    return (
        <div>
            <Header />
            <div className="rooms">
                <h1 className="rooms__title">Quartos</h1>
                <p className="rooms__description">Cada um dos nossos quartos luminosos e inundados de luz vêm com tudo que você poderia precisar para uma estadia confortável. E sim, o conforto não é o nosso único objetivo, também valorizamos um bom design, mobiliário contemporâneo elegante complementado pelos tons ricos da paleta da natureza, visíveis a partir das janelas com vista par</p>
                <div className="rooms__content">
                    {rooms.map((item) => {
                        console.log(item)
                        return (
                            <div className="rooms__room" key={item.id}>
                                <div className="rooms__img">
                                    <img src={item.images[0]} width="100%" height="100%" name={item.name}></img>
                                </div>
                                <div className="rooms__name">
                                    <h1 className="rooms__name--h1">{item.name}</h1>
                                </div>
                                <div className="rooms__more-information">
                                    <div className="rooms__link">
                                        <Link to={`/rooms/${item.id}`} className="rooms__link--a">
                                            <i className="room_link--icon"><FaPlusCircle color="#444" /></i><span className="rooms__link--span">Mais Detalhes</span>
                                        </Link>
                                    </div>
                                    <div className="rooms__price">
                                        <span className="rooms__price--span">
                                            {maskPrice(item.price)} por noite
                                        </span>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}