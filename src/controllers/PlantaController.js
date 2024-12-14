const models = require('../models/PlantaModel');

const getAllPlantasController = (req, res)=>{

    try{
        let plantas = models.getAllPlantas();
        console.log(plantas)
        res.status(200).json(plantas);
    }
    catch(error){
        console.log(error)
        res.sendStatus(500);
    }
};

const getPlatasByIdController = (req, res)=>{
    let plantas = models.getPlatasById(req.params.id);

    res.status(200).json(plantas);
};

const createPlataControler = (req, res)=>{
    const {nome, preco, quantidade} = req.body;
    let plantas = models.createPlata(nome, preco, quantidade);

    res.status(200).json(plantas);
}

const updatePlantaController = (req, res)=>{
    const {nome, preco, quantidade} = req.body;
    let plantas = models.updatePlanta(req.params.id, nome, preco, quantidade);

    res.status(200).json(plantas);
}

const deletePlantaControler = (req, res)=>{
    let plantas = models.deletePlanta(req.params.id);

    res.status(200).json(plantas);
}

module.exports = {
    getAllPlantasController,
    getPlatasByIdController,
    createPlataControler,
    updatePlantaController,
    deletePlantaControler
}