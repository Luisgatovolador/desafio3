# Imagen Node dependiendo de versión instalada
FROM node:24

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY package.json package-lock.json ./
RUN npm install

# Copiar el resto
COPY . .

# Construye la app para producción
RUN npm run build

# Expone el puerto de desarrollo (opcional si solo se construye)
EXPOSE 4200

# Por si quisieras iniciar en local aún
CMD ["npm", "start"]
