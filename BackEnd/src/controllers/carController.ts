import { Request, Response } from 'express';
import Car from '../models/Car';

// Crear un carro
export const createCar = async (req: Request, res: Response) => {
  try {
    const { make, model, year, price, imageUrl } = req.body;
    const newCar = new Car({ make, model, year, price, imageUrl });
    await newCar.save();
    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el carro', error });
  }
};

// Obtener todos los carros
export const getCars = async (_req: Request, res: Response) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los carros', error });
  }
};

// Obtener un carro por ID
export const getCarById = async (req: Request, res: Response) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Carro no encontrado' });
    }
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el carro', error });
  }
};

// Actualizar un carro
export const updateCar = async (req: Request, res: Response) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!car) {
      return res.status(404).json({ message: 'Carro no encontrado' });
    }
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el carro', error });
  }
};

// Eliminar un carro
export const deleteCar = async (req: Request, res: Response) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Carro no encontrado' });
    }
    res.status(200).json({ message: 'Carro eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el carro', error });
  }
};
