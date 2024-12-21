const router = require('express').Router();
const controllers = require('../controllers/VasosController.js');
const {paginationValidator,IdValidator, plantasValidator, vasosValidator} = require('../middleware/RequestValidators.js');
const {validationResultMiddleware} = require('../middleware/ValidationResultMiddleware.js');
const { authenticateToken} = require('../middleware/AuthenticatedMiddleware.js');

//read
router.get('/', authenticateToken,paginationValidator,validationResultMiddleware, controllers.getAllVasosController);
router.get('/:id',authenticateToken, IdValidator,validationResultMiddleware, controllers.getVasoByIdController);

//create
router.post('/', authenticateToken,vasosValidator, validationResultMiddleware, controllers.createVasoControler);

//update
router.put('/:id', authenticateToken,IdValidator,validationResultMiddleware, controllers.updateVasoController);

//delete
router.delete('/:id', authenticateToken,IdValidator,validationResultMiddleware, controllers.deleteVasoControler);

module.exports = router;
