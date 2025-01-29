import Joi from "joi";

// validação para o modelo do carro
export const modeloCarro = Joi.object({
  nome: Joi.string().min(3).required().messages({
    "string.min": "O nome do carro deve ter pelo menos 3 caracteres",
    "any.required": "O Nome do carro é obrigatório.",
  }),
  sigla: Joi.string().length(3).required().messages({
    "string.length": "A sigla deve ter exatamente 3 caracteres.",
    "any.required": "A sigla é obrigatoria.",
  }),
  velocidadeMaxima: Joi.number().min(1).required().messages({
    "number.min": "A velocidade maxíma deve ser maior ou igual a 1.",
    "any.required": "A velocidade maxíma é obrigatória.",
  }),
  potencia: Joi.number().min(1).required().messages({
    "number.min": "A potencia deve ser maior ou igual a 1.",
    "any.required": "A potência é obrigatória",
  }),
  consumo: Joi.number().min(0.1).required().messages({
    "number.min": "O cunsumo deve ser maior ou igual a 0.1.",
    "any.required": "O consumo é obrigatório",
  }),
});

// instalar joi = npm install joi ; no terminal

// validacao para atualização do carro
export const modeloAtualizacaoCarro = Joi.object({
  nome: Joi.string().min(3), // Nome do carro, pelo menos 3 caracteres
  sigla: Joi.string().length(3), // Sigla ou modelo, 3 Caracteres
  velocidadeMaxima: Joi.number().min(1), // Potência minima de 1 Cv
  potencia: Joi.number().min(1), // Velocidade minima de 1km/h
  consumo: Joi.number().min(0.1), // ano de fabricação
});
