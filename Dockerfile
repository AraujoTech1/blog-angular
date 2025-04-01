# Usando uma imagem base do Node.js
FROM node:18

# Definindo o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiando os arquivos de dependências do package.json
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando todo o conteúdo do projeto para o diretório /app no contêiner
COPY . .

# Comando para rodar a aplicação (inicia o servidor de desenvolvimento)
CMD ["npm", "start"]
