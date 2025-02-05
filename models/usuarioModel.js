// Modulo bcrypt para criptografar senhas
import bcrypt from 'bcrypt';

let usuarios = [
    {
        id: 1,
        nome: 'Gabriel Godoy',
        email: 'Godoy@exemplo.com',
        senha: bcrypt.hashSync('senha123', 10)
    },
];

// Função para obter todos os usuarios 
export const getAllusuario = () => usuarios;

// Função para encontrar um usuario pelo 
export const getUsuarioByEmail = (email) => {
    return usuarios.find((usuarios) => usuarios.email === email);
};

// Função para criar um novo usuario 

export const createUsuario = (novoUsuario) => {
    const novoId =  usuarios.length + 1;

    //Criar o novo usuario com dados fornecido e senha criptografada
    const usuario = {
        ...novoUsuario,
        id: novoId,
        senha: bcrypt.hashSync(novoUsuario.senha, 10),
    };

    // Adiciona o novo usuario 
    usuarios.push(usuario);

    // Retorna o usuario criado
    return usuario;
};

// Função para atualizar os dados de um usuario existente
export const updateUsuario = (id, daosAtualizados) => {
    const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === id);

    if (usuarioIndex === -1) return null;

    usuarios[usuarioIndex] = {...usuarios[usuarioIndex], ...daosAtualizados};

    return usuarios[usuarioIndex];
};


// Função para excluir um usuario pelo id 
export const deleteUsuario = (id) => {
    const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === id);

    if (usuarioIndex === -1) return null;

    const [usuarioRemovido] = usuarios.splice(usuarioIndex, 1);

    return usuarioRemovido;
};