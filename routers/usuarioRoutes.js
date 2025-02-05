import express from "express";
import { getUsuario } from "../controllers/usuarioController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Rota para obter todos os usuarios (Necessita de autenticação)
router.get('/', authenticate, getUsuario);

/* Em baixo teria todas as outras rotas que são necessárias para uma API,
tambem sendo necessário incluir no controller (POST, PUT, DELETE), 
porem na de usuario é somente um "Escopo" de como poderia ser feito. */

export default router;