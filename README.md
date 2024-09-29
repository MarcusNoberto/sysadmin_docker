# Bem-vindo ao Projeto Back-end com Docker 🐋

Esse projeto faz parte do trabalho final da disciplina administração de sistemas e tem como objetivo mostrar o funcionamento de uma API utilizando containers e coceitos Docker.

Aqui você vai encontrar alguns detalhes sobre o projeto, bem como instruções para baixar o projeto localmente.
Obrigado por acessar!

---

# Integrantes:
- Huggo Parcelly da Silva 		120210155
- Igor Tejo Bezerra R. Nogueira 	120210131
- Marcus Vinicius Norberto Ideao 	119210145
- Raphael Cavalcante Ramos 		120110277

---

# 🛠️ Tecnologias Utilizadas

 - Node.js
 - Express
 - TypeScript
 - Prisma ORM
 - PostgreSQL
 - Docker

---

# 📋 Endpoints Disponíveis

  ## /products
  - POST /products: Adiciona um novo produto.
  - GET /products: Lista todos os produtos.
  - GET /products/:id: Detalhes de um produto específico.

---

# 🚀 Como Executar o Projeto Localmente

## Pré-requisitos
- Node.js (versão 20 ou superior)
- Docker e Docker Compose
- PostgreSQL (caso não use Docker)

## Passos para Instalação
### 1. Clone o repositório:

```
git clone (ADICIONAR LINK DO REPOSITÓRIO)
cd backend
```

### 2. Instale as dependências:

```
npm install
```

### 3. Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

```
DATABASE_URL=postgresql://USER:PASSWORD@db:5432/dbname
POSTGRES_USER=dbuser
POSTGRES_PASSWORD=dbpassword
POSTGRES_DB=dbname
```

### 4. Utilizando Docker

#### 4.1. Através do Dockerfile:

- Construir a imagem
```
docker build -t backend-img .

```

- Verificar se a imagem foi criada com sucesso
```
docker images
```

- Rodar o container com a aplicação
```
docker run -d -p 3001:3001 --name backend backend-img
```

#### 4.2. Através do Docker Compose:
``` 
docker-compose up -d --build
```

#### 5. A API estará disponível em:
http://localhost:3001

---
# Tutoriais
- https://www.youtube.com/watch?v=ntbpIfS44Gw
- https://www.youtube.com/watch?v=pTFZFxd4hOI
 
---
