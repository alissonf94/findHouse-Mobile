import { ImageProps } from "react-native";
import imageHouse from "../images/house.png"


export interface House{
    name: string
    imageApresentation: ImageProps['source']
    images: string[]
    description: string
    price: number
}

export const HouseList: House[] = [
    {
        name: "Casa no Serraville",
        imageApresentation:imageHouse, 
        images:['https://arkpad.com.br/wp-content/uploads/2020/07/casas-pequenas-1.jpg','https://s2.glbimg.com/fTBvXesg5LFIEzABumYk18Bbi50=/smart/e.glbimg.com/og/ed/f/original/2017/07/21/casa-de-praia-debora-aguiar_02.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5rXr0uWUfkstWoL70Z8uOTABOuJtriBnNQ&usqp=CAU'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum elit.",
        price: 1200000
    },
    {
        name: "Casa no Atmosfera",
        imageApresentation:imageHouse, 
        images:['https://arkpad.com.br/wp-content/uploads/2020/07/casas-pequenas-1.jpg','https://s2.glbimg.com/fTBvXesg5LFIEzABumYk18Bbi50=/smart/e.glbimg.com/og/ed/f/original/2017/07/21/casa-de-praia-debora-aguiar_02.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5rXr0uWUfkstWoL70Z8uOTABOuJtriBnNQ&usqp=CAU'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum elit.",
        price: 1200000
    },
    {
        name: "Casa no Alphavile",
        imageApresentation:imageHouse, 
        images:['https://arkpad.com.br/wp-content/uploads/2020/07/casas-pequenas-1.jpg','https://s2.glbimg.com/fTBvXesg5LFIEzABumYk18Bbi50=/smart/e.glbimg.com/og/ed/f/original/2017/07/21/casa-de-praia-debora-aguiar_02.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5rXr0uWUfkstWoL70Z8uOTABOuJtriBnNQ&usqp=CAU'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum elit.",
        price: 1200000
    },
    {
        name: "Casa no Terras Alphavile",
        imageApresentation:imageHouse, 
        images:['https://arkpad.com.br/wp-content/uploads/2020/07/casas-pequenas-1.jpg','https://s2.glbimg.com/fTBvXesg5LFIEzABumYk18Bbi50=/smart/e.glbimg.com/og/ed/f/original/2017/07/21/casa-de-praia-debora-aguiar_02.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5rXr0uWUfkstWoL70Z8uOTABOuJtriBnNQ&usqp=CAU'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum elit.",
        price: 1200000
    },
    {
        name: "Casa no Park Ville",
        imageApresentation:imageHouse, 
        images:['https://arkpad.com.br/wp-content/uploads/2020/07/casas-pequenas-1.jpg','https://s2.glbimg.com/fTBvXesg5LFIEzABumYk18Bbi50=/smart/e.glbimg.com/og/ed/f/original/2017/07/21/casa-de-praia-debora-aguiar_02.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5rXr0uWUfkstWoL70Z8uOTABOuJtriBnNQ&usqp=CAU'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum elit.",
        price: 1200000
    },
    {
        name: "Casa no Montville",
        imageApresentation:imageHouse, 
        images:['https://arkpad.com.br/wp-content/uploads/2020/07/casas-pequenas-1.jpg','https://s2.glbimg.com/fTBvXesg5LFIEzABumYk18Bbi50=/smart/e.glbimg.com/og/ed/f/original/2017/07/21/casa-de-praia-debora-aguiar_02.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5rXr0uWUfkstWoL70Z8uOTABOuJtriBnNQ&usqp=CAU'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum elit.",
        price: 120000
    },
]

