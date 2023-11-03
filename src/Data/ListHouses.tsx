import { ImageProps } from "react-native";
import imageHouse from "../images/house.png"

export interface House{
    name: string
    image: ImageProps['source']
    description: string
    price: number
}

export const HouseList: House[] = [
    {
        name: "Casa no Serraville",
        image: imageHouse,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum elit.",
        price: 1200000
    },
    {
        name: "Casa no Serraville",
        image: imageHouse,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum elit.",
        price: 1200000
    },
    {
        name: "Casa no Serraville",
        image: imageHouse,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum elit.",
        price: 1200000
    },
    {
        name: "Casa no Serraville",
        image: imageHouse,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum elit.",
        price: 1200000
    },
    {
        name: "Casa no Serraville",
        image: imageHouse,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum elit.",
        price: 1200000
    },
    {
        name: "Casa no Serraville",
        image: imageHouse,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum elit.",
        price: 120000
    },
]

