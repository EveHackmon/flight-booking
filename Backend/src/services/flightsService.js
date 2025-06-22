// src/services/flightsService.js

import { Flights } from '../data-access/flightsModel.js';

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

  async fetchAllflights() {
    try {
      const flights = await Flights.findAll();
      if (!flights || flights.length === 0) {
        throw new Error('flights not found');
      }
      return flights;
    } catch (err) {
      console.error('Error fetching flights:', err);
      throw new Error('Failed to fetch flights');
    }
  },
};
