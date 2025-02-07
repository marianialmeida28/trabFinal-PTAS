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

const buscarTreinosPorId = async (req, res) => {
    
    try {
        const {id} = req.params
        const treinos = await treinos.findById(id);
    
        if(!treinos) {
            return res.json ({
                erro: true,
                mensagem: 'treino não encontrado'
            })
        }
        res.json(treinos)
        
    } catch (error) {
        console.log(error)
        return res.json({
            erro: true,
            mensagem: 'ID inválido'
        })
    }
}

const atualizarTreinos =  async (req, res) => {
    try{
        const {id} = req.params;
        const treinos = await treinos.findByIdAndUpdate(id, req.body, {new: true})
        if (!treinos){
            return res.json({
                erro: true,
                mensagem: 'treino não encontrado'
            })
        }
        res.json({
            erro: false, 
            treinos
        })
    } catch (error) {
        res.json({
        erro: true,
        mensagem: 'treinos não encontrado'
        })
    }
}

const excluirTreinos = async (req, res) => {
    try{
        const {id} = req.params
        const treinos = await treinos.findByIdAndDelete(id)
        if (!treinos){
            return res.json({
                erro: true,
                mensagem: 'treino não encontrado'
            })
        }
        res.json({
            erro: false,
            mensagem: 'treino excluído com sucesso'
        })
    } catch (error){
        console.log(error)
        res.json({
            erro: true,
            mensagem: error
        })
    }
}

    export {listarTreinos, addTreinos, buscarTreinosPorId, atualizarTreinos, excluirTreinos}
