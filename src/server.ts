import express from "express";
import bookRoutes from "./routes/bookRoutes";
import transactionRoutes from "./routes/transactionRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Utilizando as rotas de usuários
app.use(bookRoutes), app.use(transactionRoutes), app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
