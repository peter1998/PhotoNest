const Joi = require("joi");

module.exports = {
  validateUser: (req, res, next) => {
    const schema = Joi.object({
      username: Joi.string().min(3).max(50).required(),
      password: Joi.string().min(8).max(100).required(),
      email: Joi.string().email().required(),
      admin: Joi.boolean(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    next();
  },
  validatePhotoUpload: (req, res, next) => {
    const schema = Joi.object({
      title: Joi.string().min(3).max(50).required(),
      description: Joi.string().min(3).max(300),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    next();
  },
};
