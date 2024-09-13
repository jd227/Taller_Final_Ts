import { Request, Response } from 'express';
import { User } from '../models/user.model';

// Crear un nuevo usuario
export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ error: 'Error creating user', details: error });
  }
};

// Obtener todos los usuarios
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching users' });
  }
};

// Obtener un usuario por ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send({ error: 'User not found' });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching user' });
  }
};

// Actualizar un usuario por ID
export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).send({ error: 'User not found' });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ error: 'Error updating user' });
  }
};

// Eliminar un usuario por ID
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send({ error: 'User not found' });
    res.status(200).send({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Error deleting user' });
  }
};
