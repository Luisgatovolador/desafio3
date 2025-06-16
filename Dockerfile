# Etapa 1: Construcción de la app React
FROM node:24-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Servir la app con Nginx
FROM nginx:alpine

# Copiar los archivos de build al directorio que Nginx sirve
COPY --from=build /app/build /usr/share/nginx/html

# Copiar archivo de configuración personalizado de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto 80
EXPOSE 80

# Iniciar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
