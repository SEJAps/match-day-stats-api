import joi from "joi";

export const newUserScheme = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required()
})

export const signInUserScheme = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).required()
})