import { Request, Response } from 'express';
import { Car } from '../models/car.model';

// Crear un nuevo carro
export const createCar = async (req: Request, res: Response) => {
  try {
    const car = new Car(req.body);
    await car.save();
    res.status(201).send(car);
  } catch (error) {
    res.status(500).send({ error: 'Error creating car', details: error });
  }
};

// Obtener todos los carros
export const getAllCars = async (req: Request, res: Response) => {
  try {
    const cars = await Car.find().populate('owner');
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching cars' });
  }
};

// Obtener un carro por ID
export const getCarById = async (req: Request, res: Response) => {
  try {
    const car = await Car.findById(req.params.id).populate('owner');
    if (!car) return res.status(404).send({ error: 'Car not found' });
    res.status(200).send(car);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching car' });
  }
};

// Actualizar un carro por ID
export const updateCar = async (req: Request, res: Response) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!car) return res.status(404).send({ error: 'Car not found' });
    res.status(200).send(car);
  } catch (error) {
    res.status(500).send({ error: 'Error updating car' });
  }
};

// Eliminar un carro por ID
export const deleteCar = async (req: Request, res: Response) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) return res.status(404).send({ error: 'Car not found' });
    res.status(200).send({ message: 'Car deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Error deleting car' });
  }
};
