# Acompanhamento de Treinos e Exercícios Físicos 

Este é um sistema simples de gerenciamento de treinos e exercícios físicos via API.

## Como rodar o projeto

1. Instale as dependências:
   ```sh
   npm install
   ```

2. Inicie o servidor:
   ```sh
   node app.js
   ```

3. Acesse a API via [http://localhost:3000/treinos](http://localhost:3000/treinos)

## Rotas disponíveis e como testar

### ➤ Criar um novo treino
- *Método:* POST
- *URL:* http://localhost:3000/treinos
- *Corpo da requisição (JSON):*
  ```json
  {
    "nome": "Treino de Peito",
    "data": "2025-02-03",
    "exercicios": [
      { "nome": "Supino", "series": 4, "repeticoes": 10 },
      { "nome": "Flexão", "series": 3, "repeticoes": 15 }
    ]
  }
  ```
- *Resposta esperada:*
  ```json
  {
    "id": 1,
    "nome": "Treino de Peito",
    "data": "2025-02-03",
    "exercicios": [
      { "nome": "Supino", "series": 4, "repeticoes": 10 },
      { "nome": "Flexão", "series": 3, "repeticoes": 15 }
    ]
  }
  ```
- *Testar via cURL:*
  ```sh
  curl -X POST http://localhost:3000/treinos -H "Content-Type: application/json" -d '{"nome": "Treino de Peito", "data": "2025-02-03", "exercicios": [{"nome": "Supino", "series": 4, "repeticoes": 10}, {"nome": "Flexão", "series": 3, "repeticoes": 15}]}'
  ```

### ➤ Listar todos os treinos
- *Método:* GET
- *URL:* http://localhost:3000/treinos
- *Resposta esperada:*
  ```json
  [
    {
      "id": 1,
      "nome": "Treino de Peito",
      "data": "2025-02-03",
      "exercicios": [
        { "nome": "Supino", "series": 4, "repeticoes": 10 },
        { "nome": "Flexão", "series": 3, "repeticoes": 15 }
      ]
    }
  ]
  ```
- *Testar via cURL:*
  ```sh
  curl -X GET http://localhost:3000/treinos
  ```

### ➤ Buscar um treino por ID
- *Método:* GET
- *URL:* http://localhost:3000/treinos/:id
- *Exemplo:* http://localhost:3000/treinos/1
- *Resposta esperada:*
  ```json
  {
    "id": 1,
    "nome": "Treino de Peito",
    "data": "2025-02-03",
    "exercicios": [
      { "nome": "Supino", "series": 4, "repeticoes": 10 },
      { "nome": "Flexão", "series": 3, "repeticoes": 15 }
    ]
  }
  ```
- *Testar via cURL:*
  ```sh
  curl -X GET http://localhost:3000/treinos/1
  ```

### ➤ Atualizar um treino
- *Método:* PUT
- *URL:* http://localhost:3000/treinos/:id
- *Exemplo:* http://localhost:3000/treinos/1
- *Corpo da requisição (JSON):*
  ```json
  {
    "nome": "Treino de Cardio",
    "data": "2025-02-04",
    "exercicios": [
      { "nome": "Corrida", "minutos": 30 }
    ]
  }
  ```
- *Resposta esperada:*
  ```json
  {
    "id": 1,
    "nome": "Treino de Cardio",
    "data": "2025-02-04",
    "exercicios": [
      { "nome": "Corrida", "minutos": 30 }
    ]
  }
  ```
- *Testar via cURL:*
  ```sh
  curl -X PUT http://localhost:3000/treinos/1 -H "Content-Type: application/json" -d '{"nome": "Treino de Cardio", "data": "2025-02-04", "exercicios": [{"nome": "Corrida", "minutos": 30}]}'
  ```

### ➤ Excluir um treino
- *Método:* DELETE
- *URL:* http://localhost:3000/treinos/:id
- *Exemplo:* http://localhost:3000/treinos/1
- *Resposta esperada:*
  ```json
  {
    "mensagem": "Treino removido com sucesso"
  }
  ```
- *Testar via cURL:*
  ```sh
  curl -X DELETE http://localhost:3000/treinos/1
  ```

## Como testar com Postman
1. Abra o Postman.
2. Escolha o método (POST, GET, PUT, DELETE).
3. Insira a URL correspondente.
4. Se necessário, vá para a aba *Body*, selecione **raw** e escolha o formato *JSON*.
5. Adicione o JSON de exemplo no corpo da requisição.
6. Clique em *Send* e verifique a resposta.
 
