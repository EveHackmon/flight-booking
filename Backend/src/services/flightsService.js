import { Flights } from '../data-access/flightsModel.js';
import { Op } from 'sequelize';

export const flightsService = {
  async fetchFlightById(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      if (!flight) {
        throw new Error('flight not found');
      }

      return {
        ...flight.dataValues,
      };
    } catch (err) {
      console.error('Error fetching flight by ID:', err);
      throw new Error('Failed to fetch flight');
    }
  },

  async searchFlights({ origin, destination, departure_date, passengers }) {
  try {
    // Validation and parsing
    if (!origin || !destination || !departure_date || !passengers) {
      throw new Error('Missing required query parameters');
    }

    const departureDate = new Date(departure_date);
    const passengerCount = parseInt(passengers);

    if (isNaN(departureDate.getTime())) {
      throw new Error('Invalid date format');
    }

    if (isNaN(passengerCount) || passengerCount <= 0) {
      throw new Error('Invalid number of passengers');
    }

    const flights = await Flights.findAll({
      where: {
        origin,
        destination,
        departure_date: {
          [Op.gte]: departureDate,
        },
        seats_available: {
          [Op.gte]: passengerCount,
        },
      },
    });

    if (!flights || flights.length === 0) {
      throw new Error('No matching flights found');
    }

    return flights;
  } catch (err) {
    console.error('Error searching flights:', err.message);
    throw new Error('Failed to search flights');
  }
}
};