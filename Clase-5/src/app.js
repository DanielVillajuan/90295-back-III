import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import {fileURLToPath} from 'node:url';
import { dirname } from 'node:path';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import swaggerUiExpress from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect(`mongodb+srv://danielvillajuan:qpCcWENKy5dp6gRi@coderback.dkldvkl.mongodb.net/?retryWrites=true&w=majority&appName=Coderback`,() => {
    console.log('Base de datos conectada')
})

const swaggerOptions = {
    definition:{
        openapi:'3.0.1',
        info:{
            title: 'Adopme api',
            description: 'nuestra primera documentacion practicando con swagger'
        }
    },
    apis:[`${__dirname}/docs/**/*.yaml`]
}

const specs = swaggerJsDoc(swaggerOptions)

app.use('/apidocs',swaggerUiExpress.serve, swaggerUiExpress.setup(specs))
app.use(express.json());
app.use(cookieParser()); // opcional

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
