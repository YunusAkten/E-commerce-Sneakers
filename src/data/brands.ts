import adidas from "../images/brands/adidas.svg";
import jordan from "../images/brands/jordan.svg";
import nike from "../images/brands/nike.svg";
import puma from "../images/brands/puma.svg";
import reebok from "../images/brands/reebok.svg";
import thenorthface from "../images/brands/thenorthface.svg";
import newbalance from "../images/brands/newbalance.svg";

export interface Brand {
  id: string;
  link: string;
  name: string;
}
export const brands: Brand[] = [
  {
    id: adidas,
    link: adidas,
    name: "adidas",
  },
  {
    id: jordan,
    link: jordan,
    name: "jordan",
  },
  {
    id: nike,
    link: nike,
    name: "nike",
  },
  {
    id: puma,
    link: puma,
    name: "puma",
  },
  {
    id: reebok,
    link: reebok,
    name: "reebok",
  },
  {
    id: thenorthface,
    link: thenorthface,
    name: "thenorthface",
  },
  {
    id: newbalance,
    link: newbalance,
    name: "newbalance",
  },
];
