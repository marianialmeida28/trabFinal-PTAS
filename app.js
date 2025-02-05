import express from 'express'
import { router } from './routes/treinosRoutes.js'
import mongoose from 'mongoose'
const app = express()

app.use(express.json())

mongoose.connect('mongodb://localhost:27017')
.then(()=> {console.log("Conectado ao banco")})
.catch(err => {console.log(err)})

app.use('/treinos', router)
app.listen(3333, () => {
    console.log('Servidor Rodando na porta 3333')
})


//mongodb://localhost:27017