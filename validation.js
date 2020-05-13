//VALIDATION
const Joi = require("@hapi/joi");

//REGISTER VALIDATION
const registerValidation = (data) => {
	const schema = Joi.object({
		username: Joi.string().min(6).required(),
		password: Joi.string().min(6).required(),
	});

	return schema.validate(data);
};

module.exports.registerValidation = registerValidation;

//LOGIN VALIDATION
const loginValidation = (data) => {
	const schema = Joi.object({
		username: Joi.string().min(6).required(),
		password: Joi.string().min(6).required(),
	});

	return schema.validate(data);
};

module.exports.loginValidation = loginValidation;
