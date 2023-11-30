
import { ImageProps } from "react-native";

export interface House{
    name: string
    imageApresentation: ImageProps['source']
    images: string[]
    description: string
    price: number
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
  
 