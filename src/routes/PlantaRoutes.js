const router = require('express').Router();
const controllers = require('../controllers/PlantaController');
const {paginationValidator,IdValidator, plantasValidator} = require('../middleware/RequestValidators.js');
const {validationResultMiddleware} = require('../middleware/ValidationResultMiddleware.js');

//reat
router.get('/',paginationValidator,validationResultMiddleware, controllers.getAllPlantasController);
router.get('/:id', IdValidator,validationResultMiddleware, controllers.getPlatasByIdController);

//create
router.post('/', plantasValidator, validationResultMiddleware, controllers.createPlataControler);

//update
router.put('/:id', IdValidator,validationResultMiddleware, controllers.updatePlantaController);

//delete
router.delete('/:id', IdValidator,validationResultMiddleware, controllers.deletePlantaControler);

module.exports = router;
