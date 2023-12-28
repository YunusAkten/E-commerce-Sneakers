import nikelebronwitnessv from "../images/shoes/nikeLebronWitnessV.jpg";
import nikekyrie6 from "../images/shoes/nikeKyrie6.jpg";
import nikekd13 from "../images/shoes/nikeKd13.jpg";
import adidashardenstepback from "../images/shoes/adidasHardenStepback.jpg";
import jordanwhynot from "../images/shoes/jordanWhyNot.jpg";
import nikezoomfreak from "../images/shoes/nikeZoomFreak.jpg";
import AirJordan1Mid from "../images/shoes/AirJordan1Mid.jpg";
import nikelebronxviilow from "../images/shoes/nikeLebronXVIILow.jpg";
export interface Sneaker {
  id: string;
  name: string;
  price: number;
  img: string;
  brand?: string;
  sales: number;
  blob?: string;
  size: string[];
  gender: string[];
}
function createBlob(params: string) {
  return params.split(" ").join("-").toLowerCase();
}
function createSizes() {
  const size = ["36", "38", "40", "41", "42", "43", "44", "45"];
  return size.filter((size) => Math.random() < 0.5);
}
export const sneakers: Sneaker[] = [
  {
    id: nikelebronwitnessv,
    name: "Nike Lebron Witness V",
    price: 200,
    img: nikelebronwitnessv,
    brand: "nike",
    sales: 540,
    size: ["38", "40", "41", "42", "43", "44"],
    gender: ["man", "woman"],
  },
  {
    id: nikekyrie6,
    name: "Nike Kyrie 6",
    price: 150,
    img: nikekyrie6,
    brand: "nike",
    sales: 224,
    size: ["36", "38", "40", "41", "42", "43", "44", "45"],
    gender: ["man", "woman"],
  },
  {
    id: nikekd13,
    name: "Nike Kd 13",
    price: 180,
    img: nikekd13,
    brand: "nike",
    sales: 722,
    size: ["36", "38", "41", "43", "44", "45"],
    gender: ["man", "woman"],
  },
  {
    id: adidashardenstepback,
    name: "Adidas Harden Stepback",
    price: 50,
    img: adidashardenstepback,
    brand: "adidas",
    sales: 200,
    size: ["36", "41", "42", "43", "44", "45"],
    gender: ["man", "woman"],
  },
  {
    id: jordanwhynot,
    name: "Jordan Why Not Zer0.3 Se",
    price: 100,
    img: jordanwhynot,
    brand: "jordan",
    sales: 800,
    size: ["36", "38", "40", "41", "42", "43", "44", "45"],
    gender: ["man", "woman"],
  },
  {
    id: nikezoomfreak,
    name: "Nike Zoom Freak",
    price: 120,
    img: nikezoomfreak,
    brand: "nike",
    sales: 521,
    size: ["36", "38", "40", "44", "45"],
    gender: ["man", "woman", "kids"],
  },
  {
    id: AirJordan1Mid,
    name: "Air Jordan 1 Mid",
    price: 200,
    img: AirJordan1Mid,
    brand: "jordan",
    sales: 370,
    size: ["36", "38", "41", "42", "43"],
    gender: ["man", "woman"],
  },
  {
    id: nikelebronxviilow,
    name: "Nike Lebron XVII Low",
    price: 150,
    img: nikelebronxviilow,
    brand: "nike",
    sales: 742,
    size: ["36", "38", "40", "41", "42", "43", "44", "45"],
    gender: ["man", "woman"],
  },
].map((Sneaker) => ({
  ...Sneaker,
  blob: createBlob(Sneaker.name),
}));
