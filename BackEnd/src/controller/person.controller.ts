import { Request, Response } from 'express';
import { Person } from '../models/person.model';

export const createPerson = async (req: Request, res: Response) => {
  try {
    const person = new Person(req.body);
    await person.save();
    res.status(201).json(person);
  } catch (error) {
    res.status(400).json({ error: 'Error creating person' });
  }
};

export const getPerson = async (req: Request, res: Response) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) return res.status(404).json({ error: 'Person not found' });
    res.json(person);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching person' });
  }
};

export const updatePerson = async (req: Request, res: Response) => {
  try {
    const person = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!person) return res.status(404).json({ error: 'Person not found' });
    res.json(person);
  } catch (error) {
    res.status(400).json({ error: 'Error updating person' });
  }
};

export const deletePerson = async (req: Request, res: Response) => {
  try {
    const person = await Person.findByIdAndDelete(req.params.id);
    if (!person) return res.status(404).json({ error: 'Person not found' });
    res.json({ message: 'Person deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error deleting person' });
  }
};
