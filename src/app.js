import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './Routes/userRoutes.js';
import errorMiddleware from './Middleware/errorMiddleware.js';
import cors from "cors"

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use('/users', userRoutes);

// Error handling middleware
app.use(errorMiddleware);

export default app;
