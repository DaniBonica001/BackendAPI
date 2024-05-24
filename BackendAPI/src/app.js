import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './Routes/customerRoutes.js';
import eventRoutes from './Routes/eventRoutes.js'
import errorMiddleware from './Middleware/errorMiddleware.js';
import cors from "cors"
import nodemailer from "nodemailer"
import swaggerUi from 'swagger-ui-express'
import path from 'path';
import { readFileSync } from 'fs';

const app = express();

// cors config
app.use(cors())
app.use(bodyParser.json());

// routes
app.use('/users', userRoutes);
app.use('/events', eventRoutes)

// Error handling middleware
app.use(errorMiddleware);

// create reusable transporter object using the default SMTP transport
export const transporter = nodemailer.createTransport({
    port: 465,               // true for 465, false for other ports
    host: "smtp.gmail.com",
       auth: {
            user: process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_PASSWORD,
         },
    secure: true,
    });

// Swagger
const swaggerFilePath = path.resolve('src/Swagger/swagger_output.json');
const swaggerFile = JSON.parse(readFileSync(swaggerFilePath,'utf8'));

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));

export default app;
