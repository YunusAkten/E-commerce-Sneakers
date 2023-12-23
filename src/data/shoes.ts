import nikelebronwitnessv from "../images/shoes/nikeLebronWitnessV.jpg";
import nikekyrie6 from "../images/shoes/nikeKyrie6.jpg";
import nikekd13 from "../images/shoes/nikeKd13.jpg";
import adidashardenstepback from "../images/shoes/adidasHardenStepback.jpg";
import jordanwhynot from "../images/shoes/jordanWhyNot.jpg";
import nikezoomfreak from "../images/shoes/nikeZoomFreak.jpg";
import AirJordan1Mid from "../images/shoes/AirJordan1Mid.jpg";
import nikelebronxviilow from "../images/shoes/nikeLebronXVIILow.jpg";

interface Shoe {
  id: string;
  name: string;
  price: number;
  img: string;
  brand?: string;
}

const data: Shoe[] = [
  {
    id: nikelebronwitnessv,
    name: "Nike Lebron Witness V",
    price: 200,
    img: nikelebronwitnessv,
    brand: "nike",
  },
  {
    id: nikekyrie6,
    name: "Nike Kyrie 6",
    price: 150,
    img: nikekyrie6,
    brand: "nike",
  },
  {
    id: nikekd13,
    name: "Nike Kd 13",
    price: 180,
    img: nikekd13,
    brand: "nike",
  },
  {
    id: adidashardenstepback,
    name: "Adidas Harden Stepback",
    price: 50,
    img: adidashardenstepback,
    brand: "adidas",
  },
  {
    id: jordanwhynot,
    name: "Jordan Why Not Zer0.3 Se",
    price: 100,
    img: jordanwhynot,
    brand: "jordan",
  },
  {
    id: nikezoomfreak,
    name: "Nike Zoom Freak",
    price: 120,
    img: nikezoomfreak,
    brand: "nike",
  },
  {
    id: AirJordan1Mid,
    name: "Air Jordan 1 Mid",
    price: 200,
    img: AirJordan1Mid,
    brand: "jordan",
  },
  {
    id: nikelebronxviilow,
    name: "Nike Lebron XVII Low",
    price: 150,
    img: nikelebronwitnessv,
    brand: "nike",
  },
];
export default data;
