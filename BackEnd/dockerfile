# Usamos la imagen oficial de Node.js como base
FROM node:18

# Establecemos el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiamos los archivos package.json y package-lock.json
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código fuente
COPY . .

# Compilamos TypeScript a JavaScript
RUN npm run build

# Exponemos el puerto en el que correrá la aplicación (asegúrate que sea el mismo que usas en tu código)
EXPOSE 5000

# Iniciamos la aplicación
CMD ["npm", "run", "start"]
