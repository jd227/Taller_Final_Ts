import express, { Request, Response } from "express";
import mysql from "mysql2/promise";

// Definición de tipos para las rutas de los parámetros
interface Usuario {
    nombre: string;
    usuario: string;
    contraseña: string;
    telefono: string;
    sexo: string;
    edad: number;
}

interface Carro {
    marca: string;
    modelo: string;
    kilometraje: number;
    precio: number;
    imagen_url: string;
}

const app = express();
const port = 3000;

async function startServer() {
    let connection: mysql.Connection | null = null;
    let retries = 5;

    // Se crea la conexión a la base de datos con reintentos
    while (retries) {
        try {
            connection = await mysql.createConnection({
                host: 'mysql_db',
                port: 3306,
                user: 'root',
                password: '12345',
                database: 'miapp'
            });
            break;
        } catch (error) {
            console.error('Error conectando a MySQL, reintentando...', error);
            retries -= 1;
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }

    if (!connection) {
        console.error('No se pudo conectar a MySQL después de varios intentos.');
        process.exit(1);
    }

    // Crear tabla de usuarios si no existe
    await connection.query(`CREATE TABLE IF NOT EXISTS Usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(255) NOT NULL,
        usuario VARCHAR(255) NOT NULL,
        contraseña VARCHAR(255) NOT NULL,
        telefono VARCHAR(255) NOT NULL,
        sexo VARCHAR(255) NOT NULL,
        edad INT NOT NULL
    )`);

    // Crear tabla de carros si no existe
    await connection.query(`CREATE TABLE IF NOT EXISTS Carros (
        id INT AUTO_INCREMENT PRIMARY KEY,
        marca VARCHAR(255) NOT NULL,
        modelo VARCHAR(255) NOT NULL,
        kilometraje INT NOT NULL,
        precio DECIMAL(10, 2) NOT NULL,
        imagen_url VARCHAR(255) NOT NULL
    )`);

    // Rutas para los usuarios

    // Ruta para consultar todos los usuarios
    app.get("/usuarios", async (req: Request, res: Response) => {
        try {
            const [rows] = await connection.query("SELECT * FROM Usuarios");
            res.json(rows);
        } catch (error) {
            res.status(500).send("Error al consultar los usuarios.");
            console.error(error);
        }
    });

    // Ruta para registrar un usuario
    app.get("/registroUsuario", async (req: Request, res: Response) => {
        try {
            const { nombre, usuario, contraseña, telefono, sexo, edad } = req.query as unknown as Usuario;
            await connection.query("INSERT INTO Usuarios (nombre, usuario, contraseña, telefono, sexo, edad) VALUES (?, ?, ?, ?, ?, ?)", [nombre, usuario, contraseña, telefono, sexo, edad]);
            res.send("Usuario registrado");
        } catch (error) {
            res.status(500).send("Error al registrar el usuario.");
            console.error(error);
        }
    });

    // Rutas para los carros

    // Ruta para registrar un carro
    app.get("/registro", async (req: Request, res: Response) => {
        try {
            const { marca, modelo, kilometraje, precio, imagen_url } = req.query as unknown as Carro;
            await connection.query("INSERT INTO Carros (marca, modelo, kilometraje, precio, imagen_url) VALUES (?, ?, ?, ?, ?)", [marca, modelo, kilometraje, precio, imagen_url]);
            res.send("Carro registrado");
        } catch (error) {
            res.status(500).send("Error al registrar el carro.");
            console.error(error);
        }
    });

    // Ruta para consultar todos los carros
    app.get("/", async (req: Request, res: Response) => {
        try {
            const [rows] = await connection.query("SELECT * FROM Carros");
            res.json(rows);
        } catch (error) {
            res.status(500).send("Error al consultar los carros.");
            console.error(error);
        }
    });

    // Ruta para actualizar un carro
    app.get("/actualizarCarro", async (req: Request, res: Response) => {
        try {
            const { id, marca, modelo, kilometraje, precio, imagen_url } = req.query;
            await connection.query("UPDATE Carros SET marca = ?, modelo = ?, kilometraje = ?, precio = ?, imagen_url = ? WHERE id = ?", [marca, modelo, kilometraje, precio, imagen_url, id]);
            res.send("Carro actualizado");
        } catch (error) {
            res.status(500).send("Error al actualizar el carro.");
            console.error(error);
        }
    });

    // Ruta para eliminar un carro
    app.get("/borrarCarro", async (req: Request, res: Response) => {
        try {
            const { id } = req.query;
            await connection.query("DELETE FROM Carros WHERE id = ?", [id]);
            res.send("Carro eliminado");
        } catch (error) {
            res.status(500).send("Error al eliminar el carro.");
            console.error(error);
        }
    });

    // Configuración del puerto
    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });
}

startServer();
