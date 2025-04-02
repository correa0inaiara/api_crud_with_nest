# Use a imagem Node.js como base
FROM node:18

# Crie o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/api

# Copie os arquivos do projeto para o diretório de trabalho
COPY . .

# Copie o arquivo de configuração .env.prod para o diretório de trabalho
COPY ./.env.prod ./.env

# Instale as dependências
RUN npm install --quiet --no-optional --no-fund --loglevel=error

# Execute o comando de construção da aplicação
RUN npm run build

# Exponha a porta em que a aplicação está sendo executada
EXPOSE 3000

# Comando para iniciar a aplicação em modo de produção
CMD ["npm", "run", "start:prod"]