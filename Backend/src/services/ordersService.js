// src/services/ordersService.js

import { Orders } from '../data-access/ordersModel.js';

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
      } = orderData;

      console.log('from order service', orderData);

      const newOrder = await Orders.create({
        user_id: user_id,
        user_name: user_name ,
        user_email: user_email,
        flight_id: flight_id,
        order_date: order_date,
        price: price,
      });

      return newOrder;
    } catch (err) {
      console.error('Error creating order:', err);
      throw new Error('Failed to create order');
    }
  },

  async fetchOrdersById(userId) {
    try {
      const orders = await Orders.findAll({
        where: {user_id: userId}, 
      });
      if (!orders || orders.length === 0) {
        throw new Error('orders not found');
      }
      return orders;
    } catch (err) {
      console.error('Error fetching orders by userID:', err);
      throw new Error('Failed to fetch orders');
    }
  },
};
