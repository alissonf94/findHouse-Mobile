
import { ImageProps } from "react-native";

export interface House{
    _id: string
    name: string
    imageProfile: string
    images: string[]
    description: string
    price: number
    agent: string
    city: string
}

export interface Interest {
    _id: string
    name: string;
    email: string;
    phone: string;
    immobile: House
  }

 export type RootStackParamList = {
    House: House;
    Welcome: undefined,
    SignIn: undefined,
    Register: undefined,
    Houses: undefined,
    Favorites: undefined,
    Profile: undefined,
    Contact: undefined
}
  
 