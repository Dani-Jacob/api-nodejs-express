const express = require('express');
require('dotenv').config();
const UserRoutes = require('./src/routes/UserRoutes.js');



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/usuarios',UserRoutes);


module.exports = app;
