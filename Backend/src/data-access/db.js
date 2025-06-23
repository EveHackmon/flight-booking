// src/data-access/db.js
import { Sequelize } from 'sequelize';
import 'dotenv/config';

let sequelize;

if (process.env.POSTGRES_URI) {
  sequelize = new Sequelize(process.env.POSTGRES_URI, {
    dialect: 'postgres',
    logging: false,
  });
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME || 'flight_booking',
    process.env.DB_USER || 'postgres',
    process.env.DB_PASS || 'pass',
    {
      host: process.env.DB_HOST || 'localhost',
      dialect: 'postgres',
      logging: false,
    }
  );
}

export { sequelize };
