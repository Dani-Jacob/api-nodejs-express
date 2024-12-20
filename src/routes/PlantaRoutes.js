const router = require('express').Router();
const controllers = require('../controllers/PlantaController');
const {paginationValidator,IdValidator, plantasValidator} = require('../middleware/RequestValidators.js');
const {validationResultMiddleware} = require('../middleware/ValidationResultMiddleware.js');
const { authenticateToken} = require('../middleware/AuthenticatedMiddleware.js');

//read
router.get('/', authenticateToken,paginationValidator,validationResultMiddleware, controllers.getAllPlantasController);
router.get('/:id',authenticateToken, IdValidator,validationResultMiddleware, controllers.getPlatasByIdController);

//create
router.post('/', authenticateToken,plantasValidator, validationResultMiddleware, controllers.createPlataControler);

//update
router.put('/:id', authenticateToken,IdValidator,validationResultMiddleware, controllers.updatePlantaController);

//delete
router.delete('/:id', authenticateToken,IdValidator,validationResultMiddleware, controllers.deletePlantaControler);

module.exports = router;
