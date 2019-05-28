const express = require('express');
const trees = require('./routers/tree');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors())

app.all('*',(req, res, next) => {
  const origin = req.get('origin'); 
  res.header('Access-Control-Allow-Origin', origin);
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/', trees);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("App is listenning in port " + PORT));