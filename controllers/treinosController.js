let treinos = []; // Simulação de banco de dados

// Criar um novo treino
exports.criarTreino = (req, res) => {
    const { nome, data, exercicios } = req.body;
    
    if (typeof nome !== 'string' || nome.trim() === '') {
        return res.status(400).json({ mensagem: 'Nome do treino deve ser uma string não vazia' });
    }
    
    if (!Array.isArray(exercicios) || exercicios.length === 0) {
        return res.status(400).json({ mensagem: 'Exercícios não podem ser vazios' });
    }
    
    const id = treinos.length + 1;
    const novoTreino = { id, nome, data, exercicios };
    treinos.push(novoTreino);
    res.status(201).json(novoTreino);
};

// Listar todos os treinos
exports.listarTreinos = (req, res) => {
    res.json(treinos);
};

// Buscar um treino por ID
exports.buscarTreinoPorId = (req, res) => {
    const treino = treinos.find(t => t.id == req.params.id);
    if (!treino) return res.status(404).json({ mensagem: 'Treino não encontrado' });
    res.json(treino);
};

// Atualizar um treino
exports.atualizarTreino = (req, res) => {
    const treino = treinos.find(t => t.id == req.params.id);
    if (!treino) return res.status(404).json({ mensagem: 'Treino não encontrado' });

    const { nome, data, exercicios } = req.body;
    
    if (nome && (typeof nome !== 'string' || nome.trim() === '')) {
        return res.status(400).json({ mensagem: 'Nome do treino deve ser uma string não vazia' });
    }
    if (exercicios && (!Array.isArray(exercicios) || exercicios.length === 0)) {
        return res.status(400).json({ mensagem: 'Exercícios devem ser fornecidos como uma lista não vazia' });
    }
    
    treino.nome = nome || treino.nome;
    treino.data = data || treino.data;
    treino.exercicios = exercicios || treino.exercicios;
    res.json(treino);
};

// Excluir um treino
exports.excluirTreino = (req, res) => {
    treinos = treinos.filter(t => t.id != req.params.id);
    res.status(204).send(); // Sem conteúdo, apenas confirma a exclusão
};
