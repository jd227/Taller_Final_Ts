import { Router } from 'express';
import { createCar, getCars, getCarById, updateCar, deleteCar } from '../controllers/carController';

const router = Router();

router.post('/cars', createCar);
router.get('/cars', getCars);
router.get('/cars/:id', getCarById);
router.put('/cars/:id', updateCar);
router.delete('/cars/:id', deleteCar);

export default router;
