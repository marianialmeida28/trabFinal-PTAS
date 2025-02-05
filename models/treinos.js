import {Schema, model} from "mongoose"

const treinosSchema = new Schema ({
    nome: {
        type: String,
        require: true,
    },
    treino: {
        type: String,
        require: true,
    }
})

const Treino = model('Treinos', treinosSchema)

export {Treino}