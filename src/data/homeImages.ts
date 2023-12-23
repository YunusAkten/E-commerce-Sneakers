import whynot from "../images/homeImages/whyNotZero.jpg";
import nikeLebron from "../images/homeImages/nikeLebron12BHM.jpg";
import jordans from "../images/homeImages/Jordans.jpg";

export interface HomeImage {
  id: string;
  link: string;
  title: string;
  textColor?: string;
}

export const homeImages: HomeImage[] = [
  {
    id: whynot,
    link: whynot,
    title: "Jordan Why Not Zer0.3 Se Available",
  },
  {
    id: nikeLebron,
    link: nikeLebron,
    title: "Nike Lebron 12 BHM In Stock",
  },
  {
    id: jordans,
    link: jordans,
    title: "Jordans Available Now",
  },
];
