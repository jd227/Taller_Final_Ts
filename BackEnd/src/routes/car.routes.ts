import { Router } from 'express';
import { createCar, getAllCars, getCarById, updateCar, deleteCar } from '../controller/car.controller';

const router = Router();

// Rutas para carros
router.post('/', createCar);
router.get('/', getAllCars);
router.get('/:id', getCarById);
router.put('/:id', updateCar);
router.delete('/:id', deleteCar);

export default router;
