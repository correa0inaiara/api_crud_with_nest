# Use a imagem Node.js como base
FROM node:22.14.0-alpine

# Identificação com nome e versão e descrição da imagem
LABEL title="NEST API CRUD"
LABEL version="1.0.2"
LABEL description="Aplicação criada para demonstrar como criar uma API CRUD com o node-express framework NestJS."

# Crie o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/api

# Copie os arquivos do projeto para o diretório de trabalho
COPY . .

# Copie o arquivo de configuração .env.prod para o diretório de trabalho
COPY ./.env.prod ./.env

# Instala o instalador wget na imagem
# RUN apt-get install -y wget

# Instala o PNPM
# RUN wget -O- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -

RUN npm install --global corepack@latest

RUN corepack install --global pnpm@10.7.1

RUN corepack use pnpm@10.7.1

RUN corepack enable pnpm

# RUN curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=10.7.1 sh -

# Instale as dependências
RUN pnpm install

# Execute o comando de construção da aplicação
RUN pnpm run build

# Exponha a porta em que a aplicação está sendo executada
EXPOSE 3000

# Comando para iniciar a aplicação em modo de produção
CMD ["pnpm", "run", "start:prod"]