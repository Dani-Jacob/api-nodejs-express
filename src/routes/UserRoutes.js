const router = require('express').Router();
const controllers = require('../controllers/UserController.js');
const {paginationValidator} = require('../middleware/RequestValidators.js');
const {validationResultMiddleware} = require('../middleware/ValidationResultMiddleware.js');
const { authenticateToken, isAdmin} = require('../middleware/AuthenticatedMiddleware.js'); 

//CREATE
router.post('/',isAdmin,controllers.createUserController);

//READ
router.get('/',isAdmin,paginationValidator,validationResultMiddleware,controllers.getAllUsersController);
router.get('/:id',isAdmin,controllers.getUserByIdController);


//UPDATE
router.put('/:id',authenticateToken,controllers.updateUserController);

//DELETE
router.delete('/:id',isAdmin,controllers.deleteUserController);


module.exports = router;
