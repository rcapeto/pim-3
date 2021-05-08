import { FaSpinner } from 'react-icons/fa';
import './styles.scss';

export default function Loading() {
   return(
     <div className="loading">
         <h1 className="font-n">HAR</h1>
         <h3 className="font-n">HOTEL</h3>
         <FaSpinner color="#fff" size={30}/>
     </div>
   );
}