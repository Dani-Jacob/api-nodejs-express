const models = require('../models/VasosModels');

const getAllVasosController = (req, res) => {
    const { limite, pagina } = req.query;
    let vasos = models.getAllVasos(limite, pagina);
    res.status(200).json(vasos);

};

const getVasoByIdController = (req, res) => {
    let vaso = models.getVasosById(req.params.id);

    res.status(200).json(vaso);

};

const createVasoControler = (req, res) => {
    const { nome, preco, quantidade } = req.body;
    let vaso = models.createVaso(nome, preco, quantidade);

    res.status(200).json(vaso);

}

const updateVasoController = (req, res) => {
    const { nome, preco, quantidade } = req.body;
    let vaso = models.updateVaso(req.params.id, nome, preco, quantidade);

    res.status(200).json(vaso);
}

const deleteVasoControler = (req, res) => {
    let vaso = models.deleteVaso(req.params.id);

    res.status(200).json(vaso);

}

module.exports = {
    getAllVasosController,
    getVasoByIdController,
    createVasoControler,
    updateVasoController,
    deleteVasoControler
}