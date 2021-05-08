import { HARHotelProps } from '../interfaces';
import harMainImg from '../assets/har-hotel.png';

export const HARHotel: HARHotelProps = {
   pool: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
   restaurant: 'https://images.unsplash.com/photo-1591920476948-da986641e66a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
   spa: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
   bar: 'https://images.unsplash.com/photo-1597500320466-481a4518343b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
   laundry: 'https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
   main: harMainImg,
   gym: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
}

export const installationsItems = [
   {
      id: 1,
      name: 'Academia',
      value: HARHotel['gym'],
   },
   {
      id: 2,
      name: 'Bar ao ar livre',
      value: HARHotel['bar'],
   },
   {
      id: 3,
      name: 'Spa',
      value: HARHotel['spa'],
   },
   {
      id: 4,
      name: 'Piscina',
      value: HARHotel['pool'],
   },
   {
      id: 5,
      name: 'Restaurante',
      value: HARHotel['restaurant'],
   },
   {
      id: 6,
      value: HARHotel['laundry'],
      name: 'Lavanderia'
   }
];