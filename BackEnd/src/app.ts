import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/user.routes';
import personRoutes from './routes/person.routes';
import carRoutes from './routes/car.routes';



dotenv.config();
const app = express();

// Conexión a la base de datos de MongoDB
mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database connection error:', err));

app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));

// Configuración de la sesión con MongoStore
app.use(session({
  secret: process.env.SESSION_SECRET!,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 30 * 60 * 1000, // 30 minutos
  },
  store: MongoStore.create({
  mongoUrl: process.env.MONGO_URI,
  }),
}));

// Rutas
app.get('/', (req, res) => {
    res.send('Welcome to the CRUD API!');
  });
  
app.use('/api/users', userRoutes);
app.use('/api/persons', personRoutes);
app.use('/api/cars', carRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
