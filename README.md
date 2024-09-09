# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```


[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).



Aplicación Web CRUD con Cartas
Descripción
Este proyecto es una aplicación web con funcionalidades CRUD (Crear, Leer, Actualizar, Eliminar) que utiliza cartas en lugar de tablas para la presentación de la información. Desarrollado con Node.js, Express, Docker, Astro, JSX, TypeScript, y Tailwind CSS, además de contar con la integración de Cloudinary para la gestión y servicio de imágenes. El proyecto incluye manejo seguro de sesiones de usuario con express-session y validación de datos tanto en el frontend como en el backend. El sitio es totalmente responsivo y está optimizado para diversos dispositivos.

Características Principales
Operaciones CRUD utilizando cartas para mostrar datos.
Seguridad y manejo de sesiones con express-session.
Manejo de errores robusto con try...catch.
Imágenes servidas desde Cloudinary.
Backend y frontend contenerizados con Docker.
Interfaz de usuario responsiva y optimizada con Tailwind CSS.
Desarrollo en TypeScript para el backend y frontend.
Tecnologías Utilizadas
Backend: Node.js, Express, TypeScript, MongoDB, express-session
Frontend: Astro, JSX, TypeScript, Tailwind CSS
Imágenes: Cloudinary
Seguridad: Helmet, express-session
Logging: Winston o Morgan
Contenerización: Docker, Docker Compose
Requisitos
Para ejecutar este proyecto en tu máquina local, necesitarás tener instalados los siguientes programas:

Node.js
Docker
Git
Instalación y Ejecución
Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

Clona el repositorio:

bash
Copy code
git clone https://github.com/tu-usuario/tu-repositorio.git
Dirígete al directorio del proyecto:

bash
Copy code
cd tu-repositorio
Configura Docker y asegúrate de tener docker-compose instalado.

Ejecuta el siguiente comando para inicializar los contenedores de Docker (backend y frontend):

bash
Copy code
docker-compose up --build
El proyecto debería estar disponible en http://localhost:3000.

Configuración de Cloudinary
Crea una cuenta en Cloudinary.
Obtén tus credenciales de Cloudinary (cloud name, API key, API secret).
Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno:
bash
Copy code
CLOUDINARY_CLOUD_NAME=tu-cloud-name
CLOUDINARY_API_KEY=tu-api-key
CLOUDINARY_API_SECRET=tu-api-secret
Estructura del Proyecto
bash
Copy code
├── backend/                # Código del backend con Node.js y Express
│   ├── src/
│   ├── Dockerfile
│   ├── tsconfig.json
├── frontend/               # Código del frontend con Astro y Tailwind CSS
│   ├── src/
│   ├── Dockerfile
│   ├── tailwind.config.js
├── docker-compose.yml      # Orquestación de contenedores
└── README.md               # Instrucciones del proyecto