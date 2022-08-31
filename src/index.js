require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./database/database');

const port = process.env.PORT || 3001;
const app = express();
connectToDatabase();

app.use(cors());
app.use(express.json());




const route = require("./routes/tapi.route");
const userRoute = require("./routes/user.route");
const authRouter = require("./routes/auth.route");
const swaggerRoute = require("./routes/swagger.router");

app.use('/tapiocas', route);
app.use("/user", userRoute);
app.use("/auth", authRouter);
app.use("/api-docs", swaggerRoute);
  
app.get('/', function (req, res) {
  res.send('API Tapiocaria Abacate');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
