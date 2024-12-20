const fs = require('fs');
const path = require('path');
const pathJson = path.join(__dirname, '../db/UsersDb.json');
const CustomError = require('../customErrors/CustomError.js');

const express = require('express');
const router = express.Router();

router.get('/', installAdmin);


function installAdmin(req, res) {
    if (!fs.existsSync(pathJson)) {
        let adminInit = {
            "ultimoId": 1,
            "usuarios": [
                {
                    "id": 1,
                    "usuario": "admin",
                    "senha": "admin",
                    "permissao": "admin"
                }
            ]
        }
        fs.writeFileSync(pathJson, JSON.stringify(adminInit));
        res.sendStatus(201);
    }
    throw new CustomError(409, 'Rota install já chamada anteriormente. JSON de usuários já existe!');
}

module.exports = router;




