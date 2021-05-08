import  { useState, useEffect, useCallback, useRef, ChangeEvent, FormEvent } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

import { api } from '../../server/api';
import { Room } from '../../interfaces';

import SliderImage from './components/Slider';
import Footer from '../../components/Footer';
import Input from './components/Input';

import './styles.scss';

interface ParamsProps {
   id: string;
}

export default function RoomPage() {
   const [room, setRoom] = useState<Room | null>(null);

   const { id } = useParams<ParamsProps>();
   const history = useHistory();
   const roomId = id;

   const inputNameRef = useRef<HTMLInputElement>(null);
   const inputRGRef = useRef<HTMLInputElement>(null);
   const inputDateRef = useRef<HTMLInputElement>(null);
   const inputPhoneRef = useRef<HTMLInputElement>(null);
   const inputCPFRef = useRef<HTMLInputElement>(null);
   const inputNumberAdultRef = useRef<HTMLInputElement>(null);
   const inputNumberChildrenRef = useRef<HTMLInputElement>(null);
   const inputDateEntryrenRef = useRef<HTMLInputElement>(null);
   const inputDateExitrenRef = useRef<HTMLInputElement>(null);
   const inputAddressRef = useRef<HTMLInputElement>(null);
   const inputCEPressRef = useRef<HTMLInputElement>(null);
   const inputCityressRef = useRef<HTMLInputElement>(null);
   

   const getRoom = useCallback(async () => {
      const { data } = await api.get(`/rooms/${roomId}`);
      setRoom(data);
   }, []);


   useEffect(() => {
      getRoom();
   }, [getRoom]);

   if(!room) {
      return <p>Carregando...</p>
   }

   function handleSubmit(event: FormEvent) {
      event.preventDefault();

      const name = inputNameRef.current?.value;
      const rg =  inputRGRef.current?.value;
      const date = inputDateRef.current?.value;
      const phone = inputPhoneRef.current?.value;
      const cpf = inputCPFRef.current?.value;
      const numberAdults = inputNumberAdultRef.current?.value;
      const numberChildren = inputNumberChildrenRef.current?.value;
      const dateEntry = inputDateEntryrenRef.current?.value;
      const dateExit = inputDateExitrenRef.current?.value;
      const address = inputAddressRef.current?.value;
      const cep = inputCEPressRef.current?.value;
      const city = inputCityressRef.current?.value;


      console.table({
         name,
         rg,
         date,
         phone,
         cpf,
         numberAdults,
         numberChildren,
         dateEntry,
         dateExit,
         address,
         cep,
         city
      });
   }

   return(
      <div className={`room-page ${room.id}${room.name.toLowerCase()}`}>
         <div className="room-header" style={{ backgroundImage: `url(${room.images[1]})` }}>
            <div className="button-back">
               <button onClick={history.goBack}>
                  <FaAngleLeft color="rgba(0, 0, 0, 0.3)" size={40}/>
               </button>
            </div>

            <h2>{room.name}</h2>
         </div>

         <div className="hotel-container">
            <h2 className="page-info page-room-info">Descrição</h2>

            <div className="room-description">
               <div className="left">
                  {
                     room.description.map((description, index) => 
                        <p key={String(index)}>-{description}</p>
                     )
                  }
               </div>
               <div className="right font-n">
                  <p>R$ {room.price}/dia</p>
               </div>
            </div>

            <SliderImage items={room.images} roomName={room.name}/>


            <form className="room-form" onSubmit={handleSubmit}>
               <div className="input-container">
                  <Input 
                     label="Nome Completo"
                     labelId="name"
                     ref={inputNameRef}
                  />
                  <Input 
                     label="RG"
                     labelId="rg"
                     ref={inputRGRef}
                  />
               </div>

               <div className="input-container">
                  <Input 
                     label="Data de Nascimento"
                     labelId="date"
                     ref={inputDateRef}
                     type="date"
                  />
                  <Input 
                     label="Celular"
                     labelId="cellphone"
                     ref={inputPhoneRef}
                  />
               </div>

               <div className="input-container">
                  <Input 
                     label="CPF"
                     labelId="cpf"
                     ref={inputCPFRef}
                  />

                  <div className="input-container row">
                     <Input 
                        label="Nº Adultos"
                        labelId="numberAdults"
                        ref={inputNumberAdultRef}
                     />
                     <Input 
                        label="Nº Crianças"
                        labelId="numberChildren"
                        ref={inputNumberChildrenRef}
                     />
                  </div>
               </div>

               <div className="input-container">
                  <Input 
                     label="Data de Entrada"
                     labelId="dateEntry"
                     ref={inputDateEntryrenRef}
                     type="date"
                  />
                  <Input 
                     label="Data de Saida"
                     labelId="dateExit"
                     type="date"
                     ref={inputDateExitrenRef}
                  />
               </div>

               <div className="input-container w-100">
                  <Input 
                     label="Endereço"
                     labelId="address"
                     ref={inputAddressRef}
                  />
               </div>
               <div className="input-container">
                  <Input 
                     label="CEP"
                     labelId="cep"
                     ref={inputCEPressRef}
                  />
                  <Input 
                     label="Cidade/UF"
                     labelId="city"
                     ref={inputCityressRef}
                  />
               </div>

               <button className="submit-button">
                  Reserve já
               </button>
            </form>
         </div>

         <Footer />
      </div>
   );
}