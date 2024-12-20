const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const CustomError = require('../customErrors/CustomError.js');

const pathJson = path.join(__dirname, '../db/UsersDb.json');

function getData() {
    let data = fs.readFileSync(pathJson, 'utf8');
    return JSON.parse(data);
}

function writeData(obj){
    fs.writeFileSync(pathJson, JSON.stringify(obj));
}

//CREATE
const createUser = (usuario, senha, permissao) =>{
    let obj = getData();
    
    let novoId = obj.ultimoId + 1;
    let newUser = {
        id: novoId, 
        usuario:usuario,
        senha:senha,
        permissao:permissao
    };

    obj.usuarios.push(newUser);
    obj.ultimoId = novoId;

    writeData(obj);
    return newUser;
}

//READ
const getAllUsers = (limite,pagina) => {
    let obj = getData();
    let inicio = (parseInt(limite))*(parseInt(pagina)-1);
    let fim = inicio+parseInt(limite);
    return obj.usuarios.slice(inicio,fim)
}

const getUserById = (id) => {
    let obj = getData();
    return obj.usuarios.filter(x=>x.id == id)[0];
}

//UPDATE
const updateUser = (id, usuario, senha, permissao) =>{
    let obj = getData();
    
    let index = obj.usuarios.findIndex(x=>x.id == id);
    if(index >= 0){
        obj.usuarios[index] = {
            id: id,
            usuario: usuario ? usuario : obj.usuarios[index].usuario,
            senha: senha ? senha : obj.usuarios[index].senha,
            permissao: permissao ? permissao : obj.usuarios[index].permissao,
        }
        writeData(obj);
    }
    return obj.usuarios[index];
}

//DELETE
const deleteUser = (id) =>{
    let obj = getData();
    
    let index = obj.usuarios.findIndex(x=>x.id == id);
    if(index>=0){
        if(obj.usuarios[index].permissao != 'admin'){
            let userRemoved = obj.usuarios.splice(index,1);
            writeData(obj);
            return userRemoved[0];
        }else{
            throw new CustomError(403, 'Não é permitido excluir um admin');
        }
    }
    return undefined;
}

const generateToken = (usuario) => {
    const payload = {
        id: usuario.id,
        usuario: usuario.usuario,
        permissao: usuario.permissao,
    };

    let secret = process.env.JWT_SECRET || 'segredo';
    let time = process.env.JWT_TIME || '600s';
    return jwt.sign(payload, secret, { expiresIn: time });
};


const login = async (usuario, senha) => {
    try {
        const usuarios = getData().usuarios
    
        const user = usuarios.find(x => x.usuario == usuario);

        if (!user || user.senha != senha) {
            return null;
        }
        return generateToken(user);
    } catch (error) {
        return null;
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    login
}
