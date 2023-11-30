const mongoose = require('mongoose')

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
