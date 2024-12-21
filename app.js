const express = require('express');
require('dotenv').config();
const UserRoutes = require('./src/routes/UserRoutes.js');
const GetErrosMiddleware = require('./src/middleware/GetErrorsMiddleware.js');
const AuthRoutes = require('./src/routes/AuthRoutes.js');
const installAdminConfig = require('./src/config/InstallAdminConfig.js');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./src/swagger_output.json');
const vasosRoute = require('./src/routes/VasosRoutes')


const plantaRoutes  = require('./src/routes/PlantaRoutes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/install',installAdminConfig);

app.use('/login',AuthRoutes);

app.use('/usuarios',UserRoutes);

app.use('/estoque/plantas', plantaRoutes);

app.use('/estoque/vasos', require('./src/routes/VasosRoutes'));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(GetErrosMiddleware);

module.exports = app;
