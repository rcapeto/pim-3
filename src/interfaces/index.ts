export interface Comment {
   id: number;
   comment: string;
   user: string;
}

export interface Room {
   name: string;
   price: string;
   id: number;
   description: string[];
   images: string[];
   about: string;
}
export interface Rooms {
   id: number;
   name: string;
   price: string;
   images: string[];
}

export interface HARHotelProps {
   gym: string;
   main: string;
   laundry: string;
   bar: string;
   restaurant: string;
   spa: string;
   pool: string;
}