import { flightsService } from '../services/flightsService.js';

export const readFlightByFlightNum = async (req, res) => {
  try {
    const { flightId } = req.params;
    const flight = await flightsService.fetchFlightById(flightId);
    res.status(200).json(flight);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error fetching flight.', details: error.message });
  }
};

export const searchFlights = async (req, res) => {
  try {
    const { origin, destination, departure_date, passengers } = req.query;

    if (!origin || !destination || !departure_date || !passengers) {
      return res.status(400).json({ error: 'Missing required query parameters' });
    }

    const flights = await flightsService.searchFlights({
      origin,
      destination,
      departure_date,
      passengers: parseInt(passengers),
    });

    res.status(200).json(flights);
  } catch (error) {
    console.error('Error in searchFlights:', error);  // הוסף שורת לוג זאת
    res
      .status(500)
      .json({ error: 'Error searching for flights', details: error.message });
  }
};
