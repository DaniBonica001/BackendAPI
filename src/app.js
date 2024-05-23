import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './Routes/userRoutes.js';
import errorMiddleware from './Middleware/errorMiddleware.js';

const app = express();

app.use(bodyParser.json());
app.use('/users', userRoutes);

// Error handling middleware
app.use(errorMiddleware);

export default app;
