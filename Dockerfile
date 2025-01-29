FROM node:18-alpine AS build

# Defina o diretório de trabalho dentro do container
WORKDIR /app 
ARG VITE_URL
ENV VITE_URL=$VITE_URL

# Copie os arquivos package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código
COPY . .

# Construa o projeto para produção
RUN npm run build

# Etapa 2: Servir os arquivos estáticos
FROM nginx:alpine

# Copie os arquivos de build para o diretório de publicação do Nginx
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponha a porta 80 para acesso
EXPOSE 80

# Comando padrão para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
