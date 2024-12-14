const router = require('express').Router();
const controllers = require('../controllers/PlantaController');

//reat
router.get('/',controllers.getAllPlantasController);
router.get('/:id', controllers.getPlatasByIdController);

//create
router.post('/', controllers.createPlataControler);

//update
router.put('/:id', controllers.updatePlantaController);

//delete
router.delete('/:id', controllers.deletePlantaControler);

module.exports = router;
