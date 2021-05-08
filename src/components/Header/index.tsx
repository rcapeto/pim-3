import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaAngleDown } from 'react-icons/fa';

import './styles.css';

import { HARHotel } from '../../utils';

export default function Header() {
   const [menuActive, setMenuActive] = useState(false);

   function closeModal() {
      setMenuActive(false);
   }

   function toggleModal() {
      setMenuActive(!menuActive);
   }

   useEffect(() => {
      function onResize() {
         if(window.innerWidth > 450) setMenuActive(false);
      }

      window.addEventListener('resize', onResize);

      return () => window.removeEventListener('resize', onResize);
   }, []);

   return(
      <div className="hotel-header">
         <img src={HARHotel.main} alt="HAR Hotel" />

         <div className="hotel-header-overflow">
            <div className="header-content">
               <nav>
                  <div className="links">
                     <Link to="/" className="active">Início</Link>
                     <Link to="/">Instalações</Link>
                     <Link to="/">Quartos</Link>
                     <Link to="/">Contato</Link>
                  </div>

                  <div className="button-open-container">
                     <button onClick={toggleModal}>
                        <AiOutlineMenu color="#fff" size={40}/>
                     </button>
                  </div>
               </nav>

               <div className="welcome">
                  <h3 className="font-n">Seja bem-vindo ao</h3>
                  <div className="logo-hotel">
                     <h1 className="font-n">HAR</h1>
                     <h2 className="font-n">HOTEL</h2>
                  </div>
               </div>

               <div className="icon-scroll">
                  <p className="font-n">Scroll</p>
                  <div className="icon">
                     <FaAngleDown color="#000" size={22}/>
                  </div>
               </div>
            </div>

            {
               menuActive && (
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
                           <AiOutlineClose size={22} color="#fff"/>
                        </button>
                     </div>
                  </div>
               )
            }
         </div>
   </div>
   );
}