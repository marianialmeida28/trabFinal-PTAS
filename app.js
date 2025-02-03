// Importação das dependências
const express = require('express');
const app = express();
const port = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Importação das rotas de Treinos
const treinosRoutes = require('./routes/treinosRoutes.js');
app.use('/treinos', treinosRoutes);

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
