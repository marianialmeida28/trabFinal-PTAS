const express = require('express');
const router = express.Router();
const treinosController = require('../controllers/treinosController.js');

// Rotas CRUD para Treinos
router.post('/', treinosController.criarTreino);
router.get('/', treinosController.listarTreinos);
router.get('/:id', treinosController.buscarTreinoPorId);
router.put('/:id', treinosController.atualizarTreino);
router.delete('/:id', treinosController.excluirTreino);

module.exports = router;
