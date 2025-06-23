// src/routes/flightsRoutes.js
import { Router } from 'express';
import {
  readFlightByFlightNum,
  readAllFlights,
} from '../controllers/flightsController.js';

const router = Router();

router.get('/read-flight/:flightId', readFlightByFlightNum);
router.get('/read-all-flights', readAllFlights);

export default router;
