const { query, body } = require('express-validator');

const paginationValidator = [
    query('limite')
      .isInt({ min: 5, max: 30 })
      .custom(value => [5, 10, 30].includes(Number(value)))
      .withMessage('O limite deve ser 5, 10 ou 30'),
    query('pagina')
      .isInt({ min: 1 })  
      .withMessage('A página deve ser um número inteiro maior ou igual a 1')
];

const userValidator = [
  body('usuario')
    .isString().withMessage('O campo "usuario" deve ser uma string')
    .notEmpty().withMessage('O campo "usuario" não pode ser vazio'),
  body('senha')
    .isString().withMessage('O campo "senha" deve ser uma string')
    .isLength({ min: 6 }).withMessage('A "senha" deve ter pelo menos 6 caracteres')
    .notEmpty().withMessage('O campo "senha" não pode ser vazio'),
  body('permissao')
    .isString().withMessage('O campo "permissao" deve ser uma string')
    .isIn(['admin', 'user']).withMessage('O campo "permissao" deve ser "admin" ou "user"')
    .notEmpty().withMessage('O campo "permissao" não pode ser vazio')
];

module.exports = {
  paginationValidator,
  userValidator
};