// solicitando os dados que estao dentro do dotenv
require("dotenv").config();

// chamando / importando dependencias:
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// executando a aplicacao:
const app = express();

// configuracoes para ler json
app.use(express.json());

// Models:
const User = require("./models/User");

// acesso a api pela porta:
// app.listen(3000);

// rota de teste:
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Teste de primeira rota findHouse" });
});

// rota privada para o user logado:
app.get("/user/:id", checkToken, async (req, res) => {
  const id = req.params.id;

  // checar se ele existe:
  const user = await User.findById(id, "-password");
  if (!user) {
    return res.status(404).json({ msg: "Usuario nao encontrado" });
  }

  res.status(200).json({ user });
});

function checkToken(req, res, next) {
  const authHeader = req.headers["autorizacao"];
  const token = authHeader && authHeader.split("")[1];

  if (!token) {
    return res.status(401).json({ msg: "Acesso negado!" });
  }

  try {
    const secret = process.env.SECRET;
    jwt.verify(token, secret);
    next();
  } catch (error) {
    res.status(400).json({ msg: "token invalido" });
  }
}
// Registrando usuario:
// tem de ser async pois ele vai esperar informacoes entao precisa esperar.
app.post("/auth/register", async (req, res) => {
  const { name, lastName, cpf, email, password, confirmPassword } = req.body;

  // validacoes:
  if (!name) {
    return res
      .status(422)
      .json({ msg: "Para prosseguir é necessario informar um nome" });
  }
  if (!lastName) {
    return res
      .status(422)
      .json({ msg: "Para prosseguir é necessario informar um sobrenome" });
  }
  if (!cpf) {
    return res
      .status(422)
      .json({ msg: "Para prosseguir é necessario informar um cpf valido" });
  }
  if (!email) {
    return res
      .status(422)
      .json({ msg: "Para prosseguir é necessario informar um email" });
  }
  if (!password) {
    return res.status(422).json({
      msg: "Informe uma senha segura e dentro dos requisitos de segurança",
    });
  }
  if (password !== confirmPassword) {
    return res.status(422).json({
      msg: "Suas senhas nao correspondem",
    });
  }

  //   confirmando se o usuario ja existe:
  const userExists = await User.findOne({ email: email });

  if (userExists) {
    return res.status(422).json({
      msg: "Email ja em uso.",
    });
  }
  //   criando uma senha para o usuario:
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  // criando usuario:
  const user = new User({
    name,
    lastName,
    cpf,
    email,
    password: passwordHash,
  });
  try {
    await user.save();
    res.status(201).json({ msg: "Usuario criado com sucesso" });
  } catch (err) {
    res.status(500).json({
      msg: "Um erro ocorreu no servidor, tente novamente em alguns instantes.",
    });
  }
});

// Login de usuario:
app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;

  // validacoes:
  if (!email) {
    return res
      .status(422)
      .json({ msg: "Para prosseguir é necessario informar um email" });
  }
  if (!password) {
    return res.status(422).json({
      msg: "Informe uma senha segura e dentro dos requisitos de segurança",
    });
  }
  //   checar se o usuario ja existe:
  const user = await User.findOne({ email: email });

  if (user) {
    return res.status(422).json({
      msg: "Usuario nao encontrado",
    });
  }
  //   checar se as senhas combinam:
  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    return res.status(422).json({ msg: "Senha invalida" });
  }

  try {
    const secret = process.env.SECRET;
    const token = jwt.sign(
      {
        id: user._id,
      },
      secret
    );
    res.status(200).json({ msg: "Autenticação realizada com sucesso.", token });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "ocorreu um erro no servidor, tente novamente mais tarde!",
    });
  }
});

// credenciais para logar no banco:
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

// conectando com banco de dados:
mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.3h93jqh.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(3000);
    console.log("conectado ao banco!");
  })
  .catch((err) => console.log(err));
