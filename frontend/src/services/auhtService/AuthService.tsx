const ip = "10.30.1.205"

export function loginService (data: any){
    return fetch(`http://${ip}:3333/login`,{
       method: "POST",
       headers:{
        "Content-Type":"Application/json"
       },
       body: JSON.stringify(data) 
    })
}


