import express  from "express";

const app = express();

// permite o express entender .JSON
app.use(express.josn());

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});