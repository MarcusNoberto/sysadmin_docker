# Etapa 1: Build da aplicação
FROM node:20-alpine AS builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o package.json e o package-lock.json para instalar as dependências
COPY package*.json ./

# Instala as dependências do projeto e limpa o cache do npm em um único comando
RUN npm install --production && npm cache clean --force

# Copia o restante do código para o container
COPY . .

# Gera o Prisma Client
RUN npx prisma generate

# Etapa 2: Execução da aplicação
FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas o código necessário e as dependências já instaladas
COPY --from=builder /app . 

# Exponha a porta que a aplicação irá rodar
EXPOSE 3001

# Comando para executar a migração e iniciar a aplicação
CMD ["sh", "-c", "npx prisma migrate dev && npm run start"]
