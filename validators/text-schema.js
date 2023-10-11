"use strict";
const yup = require("yup");

const textSchema = yup.object({
  body: yup.object({
    inputText: yup.string().max(400, "Input characters limit: 400").required("This is required field."),
    // query: req.query,
    // params: req.params,
  }),
});

module.exports = textSchema;
