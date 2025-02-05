import {randomUUID} from 'node:crypto'
import { Treino } from '../models/treinos.js'


const listarTreinos = async (req, res) => {
    try {
        const treinos = await Treino.find()
        res.json(treinos)
    } catch (error) {
        console.log(error)
        return res.json({
            erro: true,
            mensagem: 'erro ao fazer requisição'
        })
    }
}

const addTreinos = (req, res) => {
    const {nome, treino} = req. body

    if (!nome || !treino) {
        return res.json({
            erro: true,
            mensagem: 'Falta valores a inserir'
        })}
    const addTreino = new Treino({nome, treino})

        try {
            addTreino.save()
            return res.json({
                erro: false,
                mensagem: 'Valor inserido no banco',
                treino: addTreino
            })
        }
         catch (error) {
            console.log(error)
            return res.json ({
                erro: true,
                mensagem: error
        })
    }
}

const buscarTreinosPorId = (req, res) => {
    const {id} = req.params
    const treinos = treinos.find((l) => l.id === parseInt(id))

    if(!treinos) {
        return res.json ({
            erro: true,
            mensagem: 'treino não encontrado'
        })
    }
    res.json(treinos)
}

const atualizarTreinos = (req, res) => {
    const {id} = req.params;
    const {nome, treino}= req.body;

    const treinos = treinos.find((l) => l.id === (id));

    if (!treinos){
        return res.json({
            erro: true,
            mensagem: 'treino não encontrado'
        })
    }

    if (!nome || !treino) {
        return res.json({
            erro: true,
            mensagem: 'Todos os campos são obrigatórios'
        })
    }

    treinos.nome = nome;
    treinos.treino = treino;

    res.json({
        erro: false,
        mensagem: 'treino alterado com sucesso'
        
    })
}

const excluirTreinos = (req, res) => {
    const {id} = req.params;
    const index = treinos.findIndex((l) => l.id === (id))

    if(index === -1){
        return res.json({
            erro: true,
            mensagem: 'Treino não encontrado'
        })
    }

    treinos.splice(index, 1);
    res.json({
        erro: false,
        mensagem: 'Treino deletado'
    })
}

    export {listarTreinos, addTreinos, buscarTreinosPorId, atualizarTreinos, excluirTreinos}
