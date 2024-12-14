const { query } = require('express-validator');

const paginationValidator = [
    query('limite')
      .isInt({ min: 5, max: 30 })
      .custom(value => [5, 10, 30].includes(Number(value)))
      .withMessage('O limite deve ser 5, 10 ou 30'),
    query('pagina')
      .isInt({ min: 1 })  
      .withMessage('A página deve ser um número inteiro maior ou igual a 1')
];

module.exports = {
    paginationValidator
};