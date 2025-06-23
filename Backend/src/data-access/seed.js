// src/data-access/seed.js
import { Flights } from './flightsModel.js';

export async function seedDb() {
  await Flights.bulkCreate([
    {
      company: 'El Al',
      origin: 'Tel Aviv',
      destination: 'New York',
      departure_date: new Date('2025-07-01T08:00:00Z'),
      arrival_date: new Date('2025-07-01T14:00:00Z'),
      price: 1200.0,
    },
    {
      company: 'Delta',
      origin: 'New York',
      destination: 'Los Angeles',
      departure_date: new Date('2025-07-02T09:00:00Z'),
      arrival_date: new Date('2025-07-02T12:00:00Z'),
      price: 900.0,
    },
    {
      company: 'British Airways',
      origin: 'London',
      destination: 'Tel Aviv',
      departure_date: new Date('2025-07-03T10:00:00Z'),
      arrival_date: new Date('2025-07-03T16:00:00Z'),
      price: 1100.0,
    },
    {
      company: 'British Airways',
      origin: 'London',
      destination: 'Tel Aviv',
      departure_date: new Date('2025-08-03T10:00:00Z'),
      arrival_date: new Date('2025-08-03T16:00:00Z'),
      price: 1100.0,
    },
    {
      company: 'British Airways',
      origin: 'London',
      destination: 'Tel Aviv',
      departure_date: new Date('2025-09-03T10:00:00Z'),
      arrival_date: new Date('2025-09-03T16:00:00Z'),
      price: 1100.0,
    },
  ]);

  console.log('✅ Seeded flights data');
}
