//Este archivo define la aplicación Express, las rutas y el middleware:

import express from 'express';

import morgan from 'morgan';

import routes from './routes/index.js';

const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); // Para recibir JSON en las peticiones
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api', routes);

// Middleware para manejar errores
app.use((req, res) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});

import { errorHandler } from './middleware/errorHandler.js';
app.use(errorHandler);

import { logger } from './middleware/logger.js';
app.use(logger);


export default app;
function cors(): any {
    throw new Error('Function not implemented.');
}

