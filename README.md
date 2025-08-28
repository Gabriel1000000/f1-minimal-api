
# 🏎️ F1 Minimal API
API minimalista de Fórmula 1 construída com **Node.js**, **Fastify** e **TypeScript**.  
Projeto criado para praticar fundamentos de desenvolvimento backend, arquitetura de software e criação de APIs leves e rápidas.  

---

## 🚀 Tecnologias Utilizadas
- [Node.js](https://nodejs.org/)  
- [Fastify](https://fastify.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [@fastify/cors](https://github.com/fastify/fastify-cors)  

---

## 📂 Estrutura do Projeto
src/
└── server.ts # Arquivo principal do servidor Fastify

---

## ▶️ Como Rodar o Projeto

### 1. Clone o repositório
```bash
git clone git@github.com:Gabriel1000000/f1-minimal-api.git
cd f1-minimal-api
```

### 2. Instale as dependências
```bash
    npm install
```


### 3. Inicie o servidor
```bash
    npm run dev
```

### Servidor rodando em:
```bash
    http://localhost:3333
```

## 📡 Rotas Disponíveis

### Listar equipes:

```http
    GET /teams
```

### Resposta exemplo:
```json
{
  "teams": [
    { "id": 1, "name": "McLaren", "base": "Woking, Reino Unido" },
    { "id": 2, "name": "Mercedes", "base": "Stuttgart, Alemanha" },
    { "id": 3, "name": "Red Bull Racing", "base": "Milton Keynes Reino Unido" }
  ]
}

```

### Listar pilotos:
```http
    GET /drivers

```

### Resposta exemplo:
```json
{
  "drivers": [
    { "id": 1, "name": "Lando Norris", "teams": "McLaren" },
    { "id": 2, "name": "George Russell", "teams": "Mercedes" },
    { "id": 3, "name": "Max Verstappen", "teams": "Red Bull Racing" }
  ]
}


```

### Resposta exemplo::
```http
    GET /drivers/:id

```

#### Exemplo:
```http
    GET /drivers/1

```

### Resposta exemplo:
```json
{
  "driver": { "id": 1, "name": "Lando Norris", "teams": "McLaren" }
}
```

### Erro (piloto inexistente):
```json
{
  "message": "Driver Not Found"
}

```

## 📜 Licença
Este projeto está sob a licença [MIT](LICENSE).

Sinta-se livre para usar, modificar e compartilhar.