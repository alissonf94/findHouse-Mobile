import AsyncStorage from "@react-native-async-storage/async-storage";
const ip = "192.168.0.109"

 export function createUser (data: any){
    return fetch(`http://${ip}:3333/register`, {
        method: "POST",
        headers:{
            "Content-Type": "Application/json",
            
        },
        body: JSON.stringify(data)
    })
}

 export async function updateUser (data: any){
    const token = await AsyncStorage.getItem('token')
    
    return fetch(`http://${ip}:3333/profile/update`, {
        method: "PUT",
        headers: {
            "Content-Type": "Application/json",
            "Authorization": `${token}`
        },
        body: JSON.stringify(data)
    }) 
}


 export async function findByIdUser (){
    const token = await AsyncStorage.getItem('token')
    
    return fetch(`http://${ip}:3333/user`, {
        method: "GET",
        headers: {
            "Content-Type": "Application/json",
            "Authorization": `${token}`
        },
    }) 
}

