const UserModel = require('../models/UserModel.js');
const CustomError = require('../customErrors/CustomError.js');

//CREATE
const createUserController = (req,res) =>{
    const {usuario, senha, permissao} = req.body;
    let newUser = UserModel.createUser(usuario, senha, permissao);
    res.status(201).json(newUser);
};

//READ
const getAllUsersController = (req,res) =>{
    let {limite,pagina} = req.query;
    let users = {};
    users = UserModel.getAllUsers(limite,pagina);
    res.status(200).json(users);
};
const getUserByIdController = (req,res) =>{
    const {id} = req.params;
    let user = UserModel.getUserById(id);
    res.status(200).json(user);
};

//UPDATE
const updateUserController = (req,res) =>{    
    const {usuario, senha, permissao} = req.body;
    const {id} = req.params;
    //Alterando seus proprios dados?
    if(req.user.id == id){
        let userUpdate = UserModel.updateUser(id, usuario, senha, permissao);
        res.status(200).json(userUpdate);
    }else{
        //Req user é admin?
        if(req.user.permissao == 'admin'){
            let user = UserModel.getUserById(id);
            //O user que vai ser alterado não é admin?
            if(user.permissao != 'admin'){
                let userUpdate = UserModel.updateUser(id, usuario, senha, permissao);
                res.status(200).json(userUpdate);
            }else{
                throw new CustomError(403, 'Não é permitido alterar os dados de um admin');
            }
        }else{
            throw new CustomError(403, 'Não é permitido alterar os dados de outras pessoas');
        }
    }
};

//DELETE
const deleteUserController = (req,res) =>{    
    const {id} = req.params;
    let deletedUser = UserModel.deleteUser(id);
    if(deletedUser){
        res.status(200).json(deletedUser);
    }else{
        res.sendStatus(404);
    }
};

module.exports = {
    createUserController,
    getAllUsersController,
    getUserByIdController,
    updateUserController,
    deleteUserController
}
