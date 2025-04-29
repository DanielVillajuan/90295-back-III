import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import swaggerUiExpress from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import dotenv from 'dotenv';
dotenv.config()

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import { addLogger, logger } from './utils/logger.js';
import __dirname from './utils/index.js';

const app = express();
const PORT = process.env.PORT || 8080;

const connection = mongoose.connect(process.env.MONGO_URL, {
    dbName: 'adoptme'
}).then(() => {
    logger.warning('Conectado a la base de datos => Mongo')
    logger.warning('Salio todo bien en la conexion!!!')
})

const swaggerOptions = {
    definition:{
        openapi:'3.0.1',
        info:{
            title: 'Adopme api',
            description: 'nuestra primera documentacion practicando con swagger'
        }
    },
    apis:[`${__dirname}/../docs/**/*.yaml`]
}

const specs = swaggerJsDoc(swaggerOptions)

app.use(addLogger);
app.use(express.json());
app.use(cookieParser());

app.use('/api/documentacion',swaggerUiExpress.serve, swaggerUiExpress.setup(specs))
app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
