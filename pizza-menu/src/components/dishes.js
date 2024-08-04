import idli from "../Assets/idly.jpg";
import dosa from "../Assets/dosa.jpg";
import kichadi from "../Assets/kichadi.jpg";
import pongal from "../Assets/pongal.jpg";
import poori from "../Assets/poori.jfif";
import upma from "../Assets/upma.jpg";

const dishData = [
  {
    name: "Idly",
    ingredients: "The main ingredients are rice, black gram,salt and water",
    price: 10,
    photoName: idli,
    soldOut: false,
  },
  {
    name: "Dosa",
    ingredients: "A fermented batter of ground white gram and rice",
    price: 20,
    photoName: dosa,
    soldOut: false,
  },
  {
    name: "Kichadi",
    ingredients: "Rice, moong dal, salt, ginger, etc...",
    price: 35,
    photoName: kichadi,
    soldOut: false,
  },
  {
    name: "Pongal",
    ingredients: "Rice, moong dal, black pepper, ginger, etc...",
    price: 35,
    photoName: pongal,
    soldOut: false,
  },
  {
    name: "Poori",
    ingredients: "Wheat, flour, salt and water",
    price: 20,
    photoName: poori,
    soldOut: true,
  },
  {
    name: "Upma",
    ingredients: "Rava, spices,lentils,onion, ginger,etc..",
    price: 35,
    photoName: upma,
    soldOut: false,
  },
];

export default dishData;
