import AsyncStorage from "@react-native-async-storage/async-storage";
const ip = "192.168.0.110"

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

export async function addImmbileFavorites(idImmobile: any){
    const token = await AsyncStorage.getItem('token')

    return fetch(`http://${ip}:3333/user/favorites/${idImmobile}`,{
        method: "PUT",
        headers: {
            "Content-Type": "Application/json",
            "Authorization": `${token}`
        },
    })
}
export async function addImmbileInterest(idImmobile: any, data: any){
    const token = await AsyncStorage.getItem('token')

    return fetch(`http://${ip}:3333/user/interest/${idImmobile}`,{
        method: "PUT",
        headers: {
            "Content-Type": "Application/json",
            "Authorization": `${token}`
        },
        body: JSON.stringify(data)
    })
}
export async function deletImmbileFavorites(idImmobile: any){
    const token = await AsyncStorage.getItem('token')

    return fetch(`http://${ip}:3333/user/favorites/${idImmobile}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "Application/json",
            "Authorization": `${token}`
        },
    })
}

export async function getFavorites(){
    const token = await AsyncStorage.getItem('token')

    return fetch(`http://${ip}:3333/user/favorites`,{
        method: "GET",
        headers: {
            "Content-Type": "Application/json",
            "Authorization": `${token}`
        },
    })
}

export async function getInterest(){
    const token = await AsyncStorage.getItem('token')

    return fetch(`http://${ip}:3333/user/interest`,{
        method: "GET",
        headers: {
            "Content-Type": "Application/json",
            "Authorization": `${token}`
        },
    })
}

