import './index.scss';

import { useState, useEffect } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import { api } from '../../server/api';
import { Rooms, Comment } from '../../interfaces';
import { maskPrice } from '../../utils';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Slider from '../../components/Slider'
import Loading from '../../components/Loading';

import { Link } from 'react-router-dom';

export default function RoomsPage() {
    const [rooms, setRooms] = useState<Rooms[]>([]);
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState<Comment[]>([])

    useEffect(() => {
        async function loadApiRooms() {
            const response = await api.get('rooms');
            setRooms(response.data);
            setLoading(false);
        };
        async function loadApiComments() {
            const response = await api.get('comments');
            setComments(response.data);
            setLoading(false);
        };
        loadApiRooms();
        loadApiComments();
    }, []);

    if (loading) return <Loading />

    return (
        <div>
            <Header />
            <div className="rooms hotel-container m-hotel-container">
                <h1 className="page-info">Quartos</h1>
                <p className="page-sub-info">
                    Cada um dos nossos quartos luminosos e inundados de luz vêm com tudo que você 
                    poderia precisar para uma estadia confortável. E sim, o conforto não é o nosso
                    único objetivo, também valorizamos um bom design, mobiliário contemporâneo 
                    elegante complementado pelos tons ricos da paleta da natureza, visíveis a
                    partir das janelas com vista par.
                </p>
                <div className="rooms__content">
                    {rooms.map((item) => {
                        return (
                            <div className="rooms__room" key={item.id}>
                                <div className="rooms__img">
                                    <img 
                                        src={item.images[0]} 
                                        width="100%" 
                                        height="100%" 
                                        alt={item.name}
                                    />
                                </div>
                                <div className="rooms__name">
                                    <h1 className="rooms__name--h1">{item.name}</h1>
                                </div>
                                <div className="rooms__more-information">
                                    <div className="rooms__link">
                                        <Link to={`/rooms/${item.id}`} className="rooms__link--a">
                                            <i className="rooms__link--icon">
                                                <FaPlusCircle color="#000" />
                                            </i>
                                            <span className="rooms__link--span">Mais Detalhes</span>
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
            <Slider comments={comments} />
            </div>
            <Footer />
        </div>
    );
}