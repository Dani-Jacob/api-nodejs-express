const { validationResult } = require('express-validator');
const CustomError = require('../customErrors/CustomError.js');

const validationResultMiddleware = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(err => err.msg);
    return next(new CustomError(400, errorMessages.join(', ')));
  }

  next();
};

module.exports = {validationResultMiddleware};
