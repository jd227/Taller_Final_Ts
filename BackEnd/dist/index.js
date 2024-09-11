"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const promise_1 = __importDefault(require("mysql2/promise"));
const app = (0, express_1.default)();
const port = 3000;
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection = null;
        let retries = 5;
        // Se crea la conexión a la base de datos con reintentos
        while (retries) {
            try {
                connection = yield promise_1.default.createConnection({
                    host: 'mysql_db',
                    port: 3306,
                    user: 'root',
                    password: '12345',
                    database: 'miapp'
                });
                break;
            }
            catch (error) {
                console.error('Error conectando a MySQL, reintentando...', error);
                retries -= 1;
                yield new Promise(resolve => setTimeout(resolve, 5000));
            }
        }
        if (!connection) {
            console.error('No se pudo conectar a MySQL después de varios intentos.');
            process.exit(1);
        }
        // Crear tabla de usuarios si no existe
        yield connection.query(`CREATE TABLE IF NOT EXISTS Usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(255) NOT NULL,
        usuario VARCHAR(255) NOT NULL,
        contraseña VARCHAR(255) NOT NULL,
        telefono VARCHAR(255) NOT NULL,
        sexo VARCHAR(255) NOT NULL,
        edad INT NOT NULL
    )`);
        // Crear tabla de carros si no existe
        yield connection.query(`CREATE TABLE IF NOT EXISTS Carros (
        id INT AUTO_INCREMENT PRIMARY KEY,
        marca VARCHAR(255) NOT NULL,
        modelo VARCHAR(255) NOT NULL,
        kilometraje INT NOT NULL,
        precio DECIMAL(10, 2) NOT NULL,
        imagen_url VARCHAR(255) NOT NULL
    )`);
        // Rutas para los usuarios
        // Ruta para consultar todos los usuarios
        app.get("/usuarios", (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const [rows] = yield connection.query("SELECT * FROM Usuarios");
                res.json(rows);
            }
            catch (error) {
                res.status(500).send("Error al consultar los usuarios.");
                console.error(error);
            }
        }));
        // Ruta para registrar un usuario
        app.get("/registroUsuario", (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { nombre, usuario, contraseña, telefono, sexo, edad } = req.query;
                yield connection.query("INSERT INTO Usuarios (nombre, usuario, contraseña, telefono, sexo, edad) VALUES (?, ?, ?, ?, ?, ?)", [nombre, usuario, contraseña, telefono, sexo, edad]);
                res.send("Usuario registrado");
            }
            catch (error) {
                res.status(500).send("Error al registrar el usuario.");
                console.error(error);
            }
        }));
        // Rutas para los carros
        // Ruta para registrar un carro
        app.get("/registro", (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { marca, modelo, kilometraje, precio, imagen_url } = req.query;
                yield connection.query("INSERT INTO Carros (marca, modelo, kilometraje, precio, imagen_url) VALUES (?, ?, ?, ?, ?)", [marca, modelo, kilometraje, precio, imagen_url]);
                res.send("Carro registrado");
            }
            catch (error) {
                res.status(500).send("Error al registrar el carro.");
                console.error(error);
            }
        }));
        // Ruta para consultar todos los carros
        app.get("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const [rows] = yield connection.query("SELECT * FROM Carros");
                res.json(rows);
            }
            catch (error) {
                res.status(500).send("Error al consultar los carros.");
                console.error(error);
            }
        }));
        // Ruta para actualizar un carro
        app.get("/actualizarCarro", (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, marca, modelo, kilometraje, precio, imagen_url } = req.query;
                yield connection.query("UPDATE Carros SET marca = ?, modelo = ?, kilometraje = ?, precio = ?, imagen_url = ? WHERE id = ?", [marca, modelo, kilometraje, precio, imagen_url, id]);
                res.send("Carro actualizado");
            }
            catch (error) {
                res.status(500).send("Error al actualizar el carro.");
                console.error(error);
            }
        }));
        // Ruta para eliminar un carro
        app.get("/borrarCarro", (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.query;
                yield connection.query("DELETE FROM Carros WHERE id = ?", [id]);
                res.send("Carro eliminado");
            }
            catch (error) {
                res.status(500).send("Error al eliminar el carro.");
                console.error(error);
            }
        }));
        // Configuración del puerto
        app.listen(port, () => {
            console.log(`Servidor corriendo en http://localhost:${port}`);
        });
    });
}
startServer();
