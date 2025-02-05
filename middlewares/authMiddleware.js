// importando o pacote JWT para manipulação de tokens
import jwt from 'jsonwebtoken';

// Chave para verificar e criar tokens JWT
const JWT_SECRET = 'secreta-chave';

// middleware de authenticação para verificar o token JWT nas requisições 
export const authenticate = (req, res, next) => {
//Obtendo o token do cabeçalho authorization (Token deve ser no formato "Bearer <Token>")
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ menssagem: 'Token não fornecido!' });
    }

    try {
        // A função jwt.verify decodifica e valida o token 
        const decoded = jwt.verify(token, JWT_SECRET);

        // se o token for valido ira decodificar
        req.user = decoded;

        // Chama o próximo middleware ou rota na sequencia (caso houver)
        next();
    } catch (error) {
        res.status(401).json({ menssagem: "Token inválido"})
    }
};
