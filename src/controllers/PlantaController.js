const models = require('../models/PlantaModel');

const getAllPlantasController = (req, res) => {
    const { limite, pagina } = req.query;
    let plantas = models.getAllPlantas(limite, pagina);
    res.status(200).json(plantas);

};

const getPlatasByIdController = (req, res) => {
    let plantas = models.getPlantasById(req.params.id);

    res.status(200).json(plantas);

};

const createPlantaControler = (req, res) => {
    const { nome, preco, quantidade } = req.body;
    let plantas = models.createPlanta(nome, preco, quantidade);

    res.status(200).json(plantas);

}

const updatePlantaController = (req, res) => {
    const { nome, preco, quantidade } = req.body;
    let plantas = models.updatePlanta(req.params.id, nome, preco, quantidade);

    res.status(200).json(plantas);
}

const deletePlantaControler = (req, res) => {
    let plantas = models.deletePlanta(req.params.id);

    res.status(200).json(plantas);

}

module.exports = {
    getAllPlantasController,
    getPlatasByIdController,
    createPlantaControler,
    updatePlantaController,
    deletePlantaControler
}