import {
    getAllcarros,
    getCarroBySigla,
    createCarro as modelCreateCarro,
    updateCarro as modelUpdateCarro,
    deleteCarro as modelDeleteCarro,
} from "../models/carroModels.js";

import { modeloCarro, modeloAtualizacaoCarro} from "../validations/carrovalidation.js";

// Função para retornar todos os carros
export const getCarros = (req, res) => {
    // Chama a função que retorna todos os carros da base de dados (Ou Array)
    const carros = getAllcarros();
    // retorna os carros com status 200
    res.status(200).json(carros);
};

// Função para retornar um carros especifíco com base na sigla
export const getCarro = (req, res) => {
    const { sigla } = req.params;
    // Chama a função que retorna o carro pela sigla
    const carro = getCarroBySigla(sigla.toUpperCase());

    // Se não for encontrado retorna erro 404
    if (!carro) {
        return res.status(404).json({ mensagem: 'Carro não encontrado! '});
    }

    // retorna o carro encontrado com status 200
    res.status(200).json(carro);
};

// função para criar um novo carro 
export const createCarro = (req, res) => {
    const { error } = modeloCarro.validate(req.body);

    // se houver erro de validação retorna status 404
    if (error) {
        return res.status(400).json({ mensagem: error.details[0].message });
    }
    
    // Dados válidos, criar um novo carro
    const novoCarro = req.body;
    //chama a função para adicionar o novo carro à base de dados (Ou array)
    const carroCriado = modelCreateCarro(novoCarro);
    // retorna o carro criado com status 201
    res.status(201).json(carroCriado);
};

// Função para atualizar um carro existente
export const updateCarro = (req, res) => {
    const { sigla } = req.params;
    // valida os dados de atualização com base no modelo
    const { error } = modeloAtualizacaoCarro.validate(req.body);
    // Se houver erro de validação, retorna status 400
    if (error) {
        return res.status(400).json({ mensagem: error.dateils[0].message });
    }

    //chama a função para atualizar os dados do carro, passando a sigla e os novos dados
    const carroAtualizado = modelUpdateCarro(sigla.toUpperCase(), req.body);
    
    // Se o carro não for encontrado para atualização, retorna status 404
    if (!carroAtualizado) {
        return res.status(404).json({ mensagem: 'Carro não encontrado para atualização!'});
    }

    // Retorna o carro atualizado com status 200
    res.status(200).json(carroAtualizado);
};

// Função para excluir um carro existente 
export const deleteCarro = (req, res) => {
    const { sigla } = req.params;
    // Chama a função para remover o carro, pasando a sigla
    const carroRemovido = modelDeleteCarro(sigla.toUpperCase());

    // Se o carro não for encontrado para remoção , retorna status 404
    if (!carroRemovido) {
        return res.status(404).json({ mensagem: 'Carro não encontrado para remoção!'});
    }

    // Retorna uma mensagem de sucesso e os dados do carro removido com status 200
    res.status(200).json({ mensagem: 'Carro removido com sucesso!', carro: carroRemovido})
};
