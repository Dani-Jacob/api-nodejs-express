const router = require('express').Router();
const controllers = require('../controllers/UserController.js');
const {paginationValidator} = require('../middleware/RequestValidators.js');
const {validationResultMiddleware} = require('../middleware/ValidationResultMiddleware.js');

//CREATE
router.post('/',controllers.createUserController);

//READ
router.get('/',paginationValidator,validationResultMiddleware,controllers.getAllUsersController);
router.get('/:id',controllers.getUserByIdController);


//UPDATE
router.put('/:id',controllers.updateUserController);

//DELETE
router.delete('/:id',controllers.deleteUserController);


module.exports = router;
