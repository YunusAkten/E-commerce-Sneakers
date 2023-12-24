import nikelebronwitnessv from "../images/shoes/nikeLebronWitnessV.jpg";
import nikekyrie6 from "../images/shoes/nikeKyrie6.jpg";
import nikekd13 from "../images/shoes/nikeKd13.jpg";
import adidashardenstepback from "../images/shoes/adidasHardenStepback.jpg";
import jordanwhynot from "../images/shoes/jordanWhyNot.jpg";
import nikezoomfreak from "../images/shoes/nikeZoomFreak.jpg";
import AirJordan1Mid from "../images/shoes/AirJordan1Mid.jpg";
import nikelebronxviilow from "../images/shoes/nikeLebronXVIILow.jpg";

export interface Shoe {
  id: string;
  name: string;
  price: number;
  img: string;
  brand?: string;
  sales: number;
}

const data: Shoe[] = [
  {
    id: nikelebronwitnessv,
    name: "Nike Lebron Witness V",
    price: 200,
    img: nikelebronwitnessv,
    brand: "nike",
    sales: 540,
  },
  {
    id: nikekyrie6,
    name: "Nike Kyrie 6",
    price: 150,
    img: nikekyrie6,
    brand: "nike",
    sales: 224,
  },
  {
    id: nikekd13,
    name: "Nike Kd 13",
    price: 180,
    img: nikekd13,
    brand: "nike",
    sales: 722,
  },
  {
    id: adidashardenstepback,
    name: "Adidas Harden Stepback",
    price: 50,
    img: adidashardenstepback,
    brand: "adidas",
    sales: 200,
  },
  {
    id: jordanwhynot,
    name: "Jordan Why Not Zer0.3 Se",
    price: 100,
    img: jordanwhynot,
    brand: "jordan",
    sales: 800,
  },
  {
    id: nikezoomfreak,
    name: "Nike Zoom Freak",
    price: 120,
    img: nikezoomfreak,
    brand: "nike",
    sales: 521,
  },
  {
    id: AirJordan1Mid,
    name: "Air Jordan 1 Mid",
    price: 200,
    img: AirJordan1Mid,
    brand: "jordan",
    sales: 370,
  },
  {
    id: nikelebronxviilow,
    name: "Nike Lebron XVII Low",
    price: 150,
    img: nikelebronwitnessv,
    brand: "nike",
    sales: 742,
  },
];
export default data;
