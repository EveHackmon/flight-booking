import { ordersService } from '../services/ordersService.js';

export const createOrder = async (req, res) => {
  try {
    const orderData = req.body;
    console.log(orderData);

    const newOrder = await ordersService.createOrder(orderData);
    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Create order error:', error);
    res
      .status(500)
      .json({ message: 'Error creating order', details: error.message });
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


