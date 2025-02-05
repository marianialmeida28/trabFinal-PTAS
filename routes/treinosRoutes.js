import express from 'express'
import {addTreinos, listarTreinos, atualizarTreinos, excluirTreinos, buscarTreinosPorId} from '../controllers/treinosController.js';
const router = express.Router();

router.post('/', addTreinos);
router.get('/', listarTreinos);
router.get('/:id', buscarTreinosPorId);
router.put('/:id', atualizarTreinos);
router.delete('/:id', excluirTreinos);

export {router}
