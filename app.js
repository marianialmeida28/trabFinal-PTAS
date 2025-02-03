
const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


const treinosRoutes = require('./routes/treinosRoutes.js');
app.use('/treinos', treinosRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
