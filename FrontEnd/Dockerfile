# Utilizamos una imagen base de Node.js
FROM node:18-alpine

# Establecemos el directorio de trabajo en el contenedor
WORKDIR /app

# Copiamos el archivo package.json y package-lock.json (si lo tienes)
COPY package*.json ./

# Instalamos las dependencias del proyecto
RUN npm install

# Copiamos el resto del código del proyecto al contenedor
COPY . .

# Compilamos el código TypeScript (si es necesario)
RUN npx tsc

# Expone el puerto 4321 para el servidor de desarrollo
EXPOSE 4321

# Comando para ejecutar el entorno de desarrollo con --host para exponer el servidor
CMD ["npm", "run", "dev", "--", "--host"]
