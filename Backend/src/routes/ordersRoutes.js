// src/routes/ordersRoutes.js
import { Router } from 'express';
import {
  createOrder,
  readOrders,
} from '../controllers/ordersController.js';

const router = Router();

router.post('/create-order', createOrder);
router.get('/read-orders/:userId', readOrders);

export default router;
