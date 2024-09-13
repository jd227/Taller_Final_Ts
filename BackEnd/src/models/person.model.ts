import { Schema, model } from 'mongoose';

const personSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
});

export const Person = model('Person', personSchema);
