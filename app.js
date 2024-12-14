const express = require('express');
require('dotenv').config();
const UserRoutes = require('./src/routes/UserRoutes.js');


const plantaRoutes  = require('./src/routes/PlantaRoutes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/usuarios',UserRoutes);

app.use('/estoque', plantaRoutes);

module.exports = app;
