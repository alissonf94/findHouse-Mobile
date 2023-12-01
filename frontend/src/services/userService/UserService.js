const ip = "192.168.0.109"

function createUser (data){
    return fetch(`http://${ip}:3333/register`, {
        method: "POST",
        headers:{
            "Content-Type": "Application/json",
        },
        body: JSON.stringify(data)
    })
}

module.exports = {
    createUser
}