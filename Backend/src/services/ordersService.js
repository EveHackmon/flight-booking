import { Orders } from '../data-access/ordersModel.js';
import { Flights } from '../data-access/flightsModel.js';
import { sequelize } from '../data-access/db.js';

export const ordersService = {
  async createOrder(orderData) {
    try {
      const {
        user_id,
        user_name,
        user_email,
        flight_id,
        order_date,
        price,
        num_passengers,
      } = orderData;

      return await sequelize.transaction(async (t) => {
        // 1. שליפת טיסה
        const flight = await Flights.findByPk(flight_id, { transaction: t });
        if (!flight) {
          throw new Error('Flight not found');
        }

        // 2. בדיקת זמינות מקומות
        if (flight.seats_available < num_passengers) {
          throw new Error('Not enough seats available');
        }

        // 3. עדכון כמות מקומות
        flight.seats_available -= num_passengers;
        await flight.save({ transaction: t });

        // 4. יצירת הזמנה
        const newOrder = await Orders.create({
          user_id,
          user_name,
          user_email,
          flight_id,
          order_date,
          price,
          num_passengers,
        }, { transaction: t });

        return newOrder;
      });
    } catch (err) {
      console.error('Error creating order with seat update:', err);
      throw new Error('Failed to create order');
    }
  },
};
