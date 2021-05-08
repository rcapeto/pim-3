import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import Footer from '../../components/Footer';

import './styles.scss';

export default function Contact() {
   const [active, setActive] = useState(false);
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');

   function closeModal() {
      setActive(false);
   }

   function toggleModal() {
      setActive(!active);
   }

   useEffect(() => {
      function onResize() {
         if (window.innerWidth > 390) setActive(false);
      }

      window.addEventListener('resize', onResize);

      return () => window.removeEventListener('resize', onResize);

   }, []);

   return (
      <div className="contact">
         <header className="contact__header">

            {
               active && (
                  <div className="menu-mobile">
                     <div className="menu-mobile-content">
                        <div className="menu-logo">
                           <h1 className="font-n">HAR</h1>
                           <p className="font-n">HOTEL</p>
                        </div>

                        <div className="links-mobile">
                           <Link to="/" className="active">Início</Link>
                           <Link to="/">Instalações</Link>
                           <Link to="/">Quartos</Link>
                           <Link to="/">Contato</Link>
                        </div>

                        <button className="close-menu-mobile" onClick={closeModal}>
                           <AiOutlineClose size={22} color="#fff" />
                        </button>
                     </div>
                  </div>
               )
            }
            <nav className="contact__nav">
               <Link to="/">Início</Link>
               <Link to="/installations">Instalações</Link>
               <Link to="/rooms">Quartos</Link>
               <Link to="/contact" className="active">Contato</Link>

               <div className="button-close">
                  <button onClick={toggleModal}>
                     <AiOutlineMenu color="#fff" size={40} />
                  </button>
               </div>
            </nav>
            <h1 className="contact__h1">CONTATO</h1>
         </header>

         <div className="hotel-container m-hotel-container">
            <h1 className="page-info justify">ESTAMOS AQUI POR VOCÊ</h1>
            <p className="page-sub-info">
               Nos hotéis de luxo, levamos nossos clientes a sério. Você tem alguma pergunta,
               reclamação ou pedido,por favor, encaminhe para nosso suporte e nós entraremos em
               contato com você o mais breve possível.
            </p>

            <div className="contact__content">
               <div className="left">
                  <h1>HAR</h1>
                  <h3>HOTEL</h3>

                  <div className="info">
                     <p>Rua Antônio João 321 - Bahia</p>
                     <p>+11 99835-9242</p>
                     <p>har_hotel@gmail.com</p>
                  </div>
               </div>

               <div className="right">
                  <form className="contact-form">
                     <div className="input">
                        <label htmlFor="name">Nome</label>
                        <input 
                           type="text" 
                           name="name" 
                           value={name}
                           onChange={({ target: { value }}) => setName(value)}
                        />
                     </div>
                     <div className="input">
                        <label htmlFor="email">E-mail</label>
                        <input 
                           type="email" 
                           name="email" 
                           value={email}
                           onChange={({ target: { value }}) => setEmail(value)}
                        />
                     </div>
                     <div className="input">
                        <label htmlFor="message">Mensagem</label>
                        <textarea
                           name="message"
                           value={message}
                           onChange={({ target: { value }}) => setMessage(value)}
                        />
                     </div>

                     <div className="button-submit-container">
                        <button>Enviar</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
}