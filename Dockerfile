# Use a imagem Node.js como base
FROM node:22.14.0-alpine

# Identificação com nome e versão e descrição da imagem
LABEL title="NEST API CRUD"
LABEL version="1.0.4"
LABEL description="Aplicação criada para demonstrar como criar uma API CRUD com o node-express framework NestJS."

# Crie o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/api

# Copie os arquivos do projeto para o diretório de trabalho
COPY . .

# Copie o arquivo de configuração .env.prod para o diretório de trabalho
COPY ./.env.prod ./.env

# Instala o Corepack para instalar e habilitar o PNPM
RUN npm install --global corepack@latest
RUN corepack install --global pnpm@10.7.1
RUN corepack use pnpm@10.7.1
RUN corepack enable pnpm

# Instale as dependências
RUN pnpm install

# Execute o comando de construção da aplicação
RUN pnpm run build

# Exponha a porta em que a aplicação está sendo executada
EXPOSE 3000

# Comando para iniciar a aplicação em modo de produção
CMD ["pnpm", "run", "start:prod"]