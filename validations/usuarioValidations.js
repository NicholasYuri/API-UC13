import Joi from 'joi'

export const modeloUsuario = Joi.object({
    nome: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    senha: Joi.string().min(6).required(),
});

// validação de login 
export const modeloLogin = Joi.object({
    email: Joi.string().email().required(),
    senha: Joi.string().min(6).required(),
});

// validação de atualização 
export const modeloAtualizacaoUsuario = Joi.object({
    nome: Joi.string().min(3),
    email: Joi.string().email(),
    senha: Joi.string().min(6),
}).min(1);