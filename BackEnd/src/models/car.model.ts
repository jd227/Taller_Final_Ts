import { Schema, model } from 'mongoose';

const carSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  owner: { type: String, required: true}, // Relación con el modelo de usuario
  Image: { type: String, required: true},
  price: { type: Number, required: true}
});

export const Car = model('Car', carSchema);
