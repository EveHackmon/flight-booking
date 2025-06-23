import express from 'express';
import flightsRoutes from '../src/routes/flightsRoutes.js';
import ordersRoutes from '../src/routes/ordersRoutes.js';
import { initDb } from '../src/data-access/flightsDataAccess.js';

export const app = express();
app.use(express.json());

app.use('/flights', flightsRoutes);
app.use('/orders', ordersRoutes);

let server = null;

export async function startTestServer() {
  try {
    await initDb();
    return new Promise((resolve, reject) => {
      server = app.listen(4000, () => {
        console.log('Flights service running on port 4000');
        resolve(server);
      });
      server.on('error', (err) => {
        reject(err);
      });
    });
  } catch (dbErr) {
    return Promise.reject(dbErr);
  }
}
