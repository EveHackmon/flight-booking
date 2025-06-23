// src/index.js
import 'dotenv/config';
import express, { json } from 'express';
import flightsRoutes from './routes/flightsRoutes.js';
import ordersRoutes from './routes/ordersRoutes.js';
import { initDb } from './data-access/flightsDataAccess.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(json());

app.use('/flights', flightsRoutes);
app.use('/orders', ordersRoutes);

// Initialize the database connection
initDb()
  .then(() => {
    console.log('Database connected successfully');

    app.listen(PORT, () => {
      console.log(`flights service running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err.message);
    process.exit(1);
  });
