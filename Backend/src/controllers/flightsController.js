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

export const readAllFlights = async (req, res) => {
  try {
    const flights = await flightsService.fetchAllflights();
    res.status(200).json(flights);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error fetching all flights', details: error.message });
  }
};
