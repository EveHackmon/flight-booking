import { ordersService } from '../services/ordersService.js';

export const createOrder = async (req, res) => {
  try {
    const {
      user_id,
      user_name,
      user_email,
      flight_id,
      order_date,
      price,
      num_passengers,
    } = req.body;

    // בדיקה בסיסית שכל הפרמטרים הדרושים קיימים
    if (
      !user_id || !user_name || !user_email || !flight_id ||
      !order_date || !price || !num_passengers
    ) {
      return res.status(400).json({ error: 'Missing required order fields' });
    }

    const newOrder = await ordersService.createOrder({
      user_id,
      user_name,
      user_email,
      flight_id,
      order_date,
      price,
      num_passengers,
    });

    res.status(201).json({
      message: 'Order created successfully',
      order: newOrder,
    });
  } catch (err) {
    res.status(500).json({
      error: 'Failed to create order',
      details: err.message,
    });
  }
};

export const readOrders = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await ordersService.fetchOrdersById(userId);
    res.status(200).json(orders);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error fetching orders.', details: error.message });
  }
};


