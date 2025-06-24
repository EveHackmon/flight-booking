// src/routes/flightsRoutes.js
import { Router } from 'express';
import {
  readFlightByFlightNum,
  searchFlights,
} from '../controllers/flightsController.js';

const router = Router();

router.get('/read-flight/:flightId', readFlightByFlightNum);
router.get('/search-flights', searchFlights);

export default router;
