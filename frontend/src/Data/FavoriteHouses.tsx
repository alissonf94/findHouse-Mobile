import { ImageProps } from "react-native";
import imageHouse from "../images/house.png";

export interface FavoriteHouse {
  name: string;
  image: ImageProps["source"];
  price: number;
}

export const FavoriteHouses: FavoriteHouse[] = [
  {
    name: "Casa no Serraville",
    image: imageHouse,
    price: 1200000,
  },
  {
    name: "Casa no Atmosfera",
    image: imageHouse,
    price: 1200000,
  },
];
