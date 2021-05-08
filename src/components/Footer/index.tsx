import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import './styles.scss';

export default function Footer() {
   return(
      <footer className="footer">
         <div className="footer-width">
            <div className="footer-left">
               <div className="footer-logo font-n">
                  <h2>HAR</h2>
                  <p>HOTEL</p>
               </div>
               <div className="info">
                  <p>Rua Antônio João 321 - Bahia</p>
                  <p>+11 99835-9242</p>
                  <p>har_hotel@gmail.com</p>
               </div>
            </div>

            <div className="footer-right font-n">
               <div className="footer-socials-item">
                  <FaFacebook size={22} color="#fff"/>
                  <p>Facebook</p>
               </div>
               <div className="footer-socials-item">
                  <FaTwitter size={22} color="#fff"/>
                  <p>Twitter</p>
               </div>
               <div className="footer-socials-item">
                  <FaInstagram size={22} color="#fff"/>
                  <p>Instagram</p>
               </div>
            </div>
         </div>
      </footer>
   );
}