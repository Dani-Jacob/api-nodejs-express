const UserModel = require('../models/UserModel.js');

//CREATE
const createUserController = (req,res) =>{
    const {usuario, senha, permissao} = req.body;
    try{
        let newUser = UserModel.createUser(usuario, senha, permissao);
        res.status(201).json(newUser);
    }catch(error){
        res.sendStatus(500);
        console.log(error);
    }
};

//READ
const getAllUsersController = (req,res) =>{
    try{
        let users = UserModel.getAllUsers();
        res.status(200).json(users);
    }catch(error){
        res.sendStatus(500);
        //console.log(error);
    }
};
const getUserByIdController = (req,res) =>{
    const {id} = req.params;
    try{
        let user = UserModel.getUserById(id);
        res.status(200).json(user);
    }catch(error){
        res.sendStatus(500);
        console.log(error);
    }
};

//UPDATE
const updateUserController = (req,res) =>{    
    const {usuario, senha, permissao} = req.body;
    const {id} = req.params;
    try{
        let userUpdate = UserModel.updateUser(id, usuario, senha, permissao);
        res.status(200).json(userUpdate);
    }catch(error){
        res.sendStatus(500);
        console.log(error);
    }
};

//DELETE
const deleteUserController = (req,res) =>{    
    const {id} = req.params;
    try{
        let deletedUser = UserModel.deleteUser(id);
        if(deletedUser){
            res.status(200).json(deletedUser);
        }else{
            res.sendStatus(404);
        }
        
    }catch(error){
        res.sendStatus(500);
        console.log(error);
    }
};

module.exports = {
    createUserController,
    getAllUsersController,
    getUserByIdController,
    updateUserController,
    deleteUserController
}
