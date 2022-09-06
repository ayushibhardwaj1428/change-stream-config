const Joi = require('Joi')

const createChangeStreamConfigSchema = Joi.object().keys({
  clientId: Joi.string().required(),
  collections: Joi.array().items(Joi.string()),
  sendRaw: Joi.boolean().default(false),
  webHookUrl: Joi.string().required(),
  active: Joi.boolean().default(true),
  webHookSecret: Joi.string().required(),
}).unknown();

const updateChangeStreamConfigSchema = Joi.object().keys({
    clientId: Joi.string(),
    collections: Joi.array().items(Joi.string()),
    sendRaw: Joi.boolean(),
    webHookUrl: Joi.string(),
    active: Joi.boolean(),
    webHookSecret: Joi.string(),
  }).unknown();

  module.exports = {createChangeStreamConfigSchema, updateChangeStreamConfigSchema}