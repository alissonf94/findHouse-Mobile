import AsyncStorage from "@react-native-async-storage/async-storage";

const ip = "192.168.1.9"

export async function findAllImmobiles(){
    const token = await AsyncStorage.getItem('token')
    
    return fetch(`http://${ip}:3333/immobiles`,{
        headers:{
            "Content-Type": "Application/json",
            "Authorization": `${token}`
        }
    })
}