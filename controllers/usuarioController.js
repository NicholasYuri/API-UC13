import { getAllusuario, getUsuarioByEmail } from '../models/usuarioModel.js';
import { modeloUsuario, modeloLogin, modeloAtualizacaoUsuario } from '../validations/usuarioValidations.js';

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

// Chave secreta para assinatura no Token JWT (Ficticio)
const JWT_SECRET = "secreta-chave"

// Função para obter todos os usuarios 
export const getUsuarios = (req, res) => {
    const usuarios = getAllusuario();

    res.status(200).json(usuarios)
};

// Função para obter um unico usuario pelo ID 
export const getUsuario = (req, res) => {
    const { id } = req.params;
    const usuario = usuario.find((user) => user.id === parseInt(id));

    if (!usuario) {
        return res.status(404).json({ mensagem: "Usuario não encontrado!" });
    }

    res.status(200).json(usuario);
};

// Função para fazer login de um usuario
export const loginUsuario = (req, res) => {
    // valida os dados de entrada utilizando o modelo de validação "modeloLogin"
    const { error } = modeloLogin.validate(req.body);

    if ( error ) {
        return res.status(400).json({ mensagem: error.details[0].message });
    }

    // Obtém o e-mail e a senha do corpo da requisição
    const { email, senha } = req.body;

    // busca o usuario pelo e-mail fornecido
    const usuario = getUsuarioByEmail(email);

    // Se o usuario não for encontrado, retorna erro 404
    if (!usuario) {
        return res.status(400).json({ mensagem: "Usuario não encontrado" });
    }

    // Verifica se a senha fornecida corresponde a senha armazenada (criptografada) do usuario 
    if (!bcrypt.compareSync(senha, usuario.senha)) {
        return res.status(401).joi({ mensagem: 'Senha inválida' });
    }

    // Se a senha for correta, cria um token JWT com o ID e o e-mail do usuario
    const token = jwt.sign({ id: usuario.id, email: usuario.email }, JWT_SECRET, {expiresIn: '1h'});

    // Retorna uma reposta com o token JWT e uma mensagem de sucesso
    res.status(200).json({ mensagem: 'Login bem-sucedido!', token });
};