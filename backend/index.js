'use strict'

require("express-async-errors")
const mongoose = require('mongoose')
const http = require("http");
mongoose.connect('mongodb://127.0.0.1:27017/findHouse')
require("dotenv").config()

const jwt = require('jsonwebtoken')

const express = require('express')
const app = express()
const server = http.createServer(app);
const socketIo = require("socket.io");
const io = socketIo(server, {});

io.on("connection", (socket) => {
  socket.on("chat", (msg) => {
    io.emit("chat", msg);
  });
  socket.on("disconnect", () => {
    console.log("Dispositivo desconectado");
  });
});

const cors = require('cors')


const port = process.env.port || 3333

const AppError = require("../backend/erros/AppError")

const authMiddleware = require("../backend/middlewares/AuthMidlleware")

const UserRouter = require("./routers/UserRouter")
const AuthRouter = require("./routers/AuthRouter")
const immobileRouter = require("./routers/ImmbileRouter")

app.use(express.json())
app.use(cors())
app.use(authMiddleware)
app.use(UserRouter)
app.use(AuthRouter)
app.use(immobileRouter)

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

server.listen(port, ()=>
    {
        console.log(`O servidor esta executando na porta ${port}`)
    }
)

const corsOptions = 
{
  origin: 'exp://10.5.1.6:8081',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204, 
  Headers: 'Acess-token', 
};

app.use(cors(corsOptions))

// credenciais para logar no banco:
//const dbUser = process.env.DB_USER;
//const dbPassword = process.env.DB_PASS;


// conectando com banco de dados:
/*mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.3h93jqh.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(3000);
    console.log("conectado ao banco!");
  })
  .catch((err) => console.log(err));*/
