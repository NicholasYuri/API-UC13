import express  from "express";

// importa as rotas
import carroRoutes from "./routers/carroRoutes.js";

const app = express();

// permite o express entender .JSON
app.use(express.json());

// Chama as rotas de carros (Estrutura completa do codigo)
app.use('/Carros', carroRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
}); 