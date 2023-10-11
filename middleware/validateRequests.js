// Middleware to validate input text
"use strict";
const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate({
      body: req.body,
    });
    return next();
  } catch (e) {
    const error = {
      error: e.message,
    };
    return res.status(405).json(error);
  }
};
module.exports = validate;
