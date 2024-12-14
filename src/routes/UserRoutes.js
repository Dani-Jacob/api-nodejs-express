const router = require('express').Router();
const controllers = require('../controllers/UserController.js');


//CREATE
router.post('/',controllers.createUserController);

//READ
router.get('/',controllers.getAllUsersController);
router.get('/:id',controllers.getUserByIdController);


//UPDATE
router.put('/:id',controllers.updateUserController);

//DELETE
router.delete('/:id',controllers.deleteUserController);


module.exports = router;
