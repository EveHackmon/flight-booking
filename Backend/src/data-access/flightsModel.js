// src/data-access/flightsModel.js
import { DataTypes } from 'sequelize';
import { sequelize } from './db.js';

export const Flights = sequelize.define(
  'flight',
  {
    flight_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    company: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    origin: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    destination: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    departure_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    arrival_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    seats_available: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0, // נניח כברירת מחדל אין מושבים פנויים
    },
  },

  {
    tableName: 'flights',
    timestamps: false,
  }
);
