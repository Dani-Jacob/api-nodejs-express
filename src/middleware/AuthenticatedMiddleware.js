const jwt = require('jsonwebtoken');
const CustomError = require('../customErrors/CustomError.js');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['Authorization'];

    const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

    if(!token){
        return next(new CustomError(401, 'Acesso negado!'));
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err){
            return next(new CustomError(401, 'Token inválido!'));
        }

        req.user = user;
        next();
    })
}


const isAdmin = (req, res, next) => {
    authenticateToken(req, res, (err) => {
        if (err) {
            return next(new CustomError(401, 'Token inválido!'));
        }

        if (req.user.permissao != 'admin') {
            return next(new CustomError(403, 'Acesso negado! Você não é admin!'));
        }
        next();
    });
};

module.exports = {
    authenticateToken,
    isAdmin
}
