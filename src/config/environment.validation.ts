import * as Joi from 'joi';

export default Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'provision')
    .default('development'),
  DATABASE_PORT: Joi.number().port().default(5432),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_NAME: Joi.string().required(),
  DATABASE_USER: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
  JWT_TOKEN_AUDIENCE: Joi.string().uri().default('http://localhost:3000'),
  JWT_TOKEN_ISSUER: Joi.string().uri().default('http://localhost:3000'),
  JWT_ACCESS_TOKEN_TTL: Joi.number()
    .integer()
    .positive()
    .required()
    .default(3600),
});
