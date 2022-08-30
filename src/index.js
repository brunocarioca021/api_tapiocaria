require('dotenv').config();
const express = require('express');
const cors = require('cors');
const route = require('./routes/tapi.route');
const connectToDatabase = require('./database/database');

const port = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());


connectToDatabase();

const userRoute = require("./routes/user.route");
const swaggerRoute = require("./routes/swagger.router");


app.use("/user", userRoute);
app.use("/api-docs", swaggerRoute);
  
app.get('/', function (req, res) {
  res.send('API Tapiocaria Abacate');
});

app.use('/tapiocas', route);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
