// src/data-access/ordersModel.js
import { DataTypes } from 'sequelize';
import { sequelize } from './db.js';

export const Orders = sequelize.define(
  'orders',
  {
    order_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
     user_email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
     flight_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
     order_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    num_passengers: { // 🆕 שדה חדש
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1, // כברירת מחדל נניח כרטיס אחד
    },
  },
  {
    tableName: 'orders',
    timestamps: false,
  }
);
