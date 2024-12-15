const { query, body, param} = require('express-validator');

const paginationValidator = [
    query('limite')
      .isInt({ min: 5, max: 30 })
      .custom(value => [5, 10, 30].includes(Number(value)))
      .withMessage('O limite deve ser 5, 10 ou 30'),
    query('pagina')
      .isInt({ min: 1 })  
      .withMessage('A página deve ser um número inteiro maior ou igual a 1')
];

const plantasValidator = [
  body('nome').isString().withMessage('Nome deve ser uma string').notEmpty().withMessage('Nome não pode ser vazio'),
  body('preco').isFloat({ min: 0 }).withMessage('Preco deve ser um número positivo'),
  body('quantidade').isInt({ min: 0 }).withMessage('Quantidade deve ser um número positivo')
];

const IdValidator = [
  param('id').isInt({ min: 0 }).withMessage('O ID deve ser um número inteiro positivo')
];

module.exports = {
    paginationValidator,
    plantasValidator,
    IdValidator
};