import express from 'express';
import mongoose from 'mongoose';
import carRoutes from './routes/carRoutes';
import session from 'express-session';
import { config } from './config/config';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));

// Configurar sesiones
app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: true,
}));

// Conectar a MongoDB (sin las opciones obsoletas)
mongoose.connect(config.mongoURI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.error('Error al conectar a MongoDB:', err));

// Rutas
app.use('/api', carRoutes);

// Iniciar servidor
app.listen(config.port, () => {
  console.log(`Servidor corriendo en el puerto ${config.port}`);
});
