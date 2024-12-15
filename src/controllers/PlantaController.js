const models = require('../models/PlantaModel');

const getAllPlantasController = (req, res, next) => {
    try {
        const { limite, pagina } = req.query;
        let plantas = models.getAllPlantas(limite, pagina);
        console.log(plantas)
        res.status(200).json(plantas);
        next();
    }
    catch (error) {
        const errorMessages = error.array().map(err => err.msg);
        next(new CustomError(400, errorMessages.join(', ')));
    }
};

const getPlatasByIdController = (req, res) => {
    try {
        let plantas = models.getPlatasById(req.params.id);

        res.status(200).json(plantas);
        next();
    }
    catch (error) {
        const errorMessages = error.array().map(err => err.msg);
        next(new CustomError(400, errorMessages.join(', ')));
    }
};

const createPlataControler = (req, res) => {
    try {
        const { nome, preco, quantidade } = req.body;
        let plantas = models.createPlata(nome, preco, quantidade);

        res.status(200).json(plantas);
        next();
    }
    catch (error) {
        const errorMessages = error.array().map(err => err.msg);
        next(new CustomError(400, errorMessages.join(', ')));
    }
}

const updatePlantaController = (req, res) => {
    try {
        const { nome, preco, quantidade } = req.body;
        let plantas = models.updatePlanta(req.params.id, nome, preco, quantidade);

        res.status(200).json(plantas);
        next();
    }

    catch (error) {
        const errorMessages = error.array().map(err => err.msg);
        next(new CustomError(400, errorMessages.join(', ')));
    }
}

const deletePlantaControler = (req, res) => {
    try {
        let plantas = models.deletePlanta(req.params.id);

        res.status(200).json(plantas);
        next();
    }
    catch (error) {
        const errorMessages = error.array().map(err => err.msg);
        next(new CustomError(400, errorMessages.join(', ')));
    }
}

module.exports = {
    getAllPlantasController,
    getPlatasByIdController,
    createPlataControler,
    updatePlantaController,
    deletePlantaControler
}