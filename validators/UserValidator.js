/* eslint-disable no-undef */
const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string().email().required(),
      generation: Joi.number().required(),
      filenumber: Joi.number().required(),
      ocupation: Joi.string().required(),
      companyname: Joi.string().required(),
      currentposition: Joi.string().required(),
      telephon: Joi.number().required(),
      placewherelive: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  login: celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
  }),
  findOne: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
  updateOne: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      first_name: Joi.string(),
      last_name: Joi.string(),
      email: Joi.string().email(),
      generation: Joi.number(),
      filenumber: Joi.number(),
      ocupation: Joi.string(),
      companyname: Joi.string(),
      currentposition: Joi.string(),
      telephon: Joi.number(),
      placewherelive: Joi.string(),
      password: Joi.string(),
    }),
  }),
  deleteOne: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
};
