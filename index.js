const express = require('express');
const trees = require('./routers/tree');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use('/', trees);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("App is listenning in port " + PORT));