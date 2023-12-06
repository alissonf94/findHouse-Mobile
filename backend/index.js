'use strict'

require("express-async-errors")
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/findHouse')
require("dotenv").config()

const jwt = require('jsonwebtoken')

const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.port || 3333

const AppError = require("../backend/erros/AppError")

const authMiddleware = require("../backend/middlewares/AuthMidlleware")

const UserRouter = require("./routers/UserRouter")
const AuthRouter = require("./routers/AuthRouter")
const ImovelRouter = require("./routers/ImovelRouter")

app.use(express.json())
app.use(cors())
app.use(authMiddleware)
app.use(UserRouter)
app.use(AuthRouter)
app.use(ImovelRouter)

const erroHandling = async (err, req, res, next)=>
{
    if(err instanceof AppError)
    {
        return res.status(err.statusCode).json(
            {
                message: err.message
            }
        )
    }

    return  res.status(500).json(
        {
            message: err.message
        }
    )
}
app.use(erroHandling)

app.listen(port, ()=>
    {
        console.log(`O servidor esta executando na porta ${port}`)
    }
)

const corsOptions = {
  origin: 'http://localhost:3333',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204, 
  Headers: 'Acess-token', 
};

app.use(cors(corsOptions))

// credenciais para logar no banco:
//const dbUser = process.env.DB_USER;
//const dbPassword = process.env.DB_PASS;


// conectando com banco de dados:
//mongoose
// .connect(
 //   `mongodb+srv://${dbUser}:${dbPassword}@cluster0.3h93jqh.mongodb.net/?retryWrites=true&w=majority`
 // )
 // .then(() => {
 //   app.listen(3000);
 //   console.log("conectado ao banco!");
 // })
 // .catch((err) => console.log(err));
